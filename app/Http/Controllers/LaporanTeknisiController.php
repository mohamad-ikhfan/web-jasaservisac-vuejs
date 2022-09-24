<?php

namespace App\Http\Controllers;

use App\Models\Karyawan;
use App\Models\LaporanTeknisi;
use App\Models\PesananPelanggan;
use App\Models\Sparepart;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LaporanTeknisiController extends Controller
{
    public function index()
    {
        return Inertia::render('LaporanTeknisi/Index', [
            'laporan' => LaporanTeknisi::paginate(10)
        ]);
    }

    public function create(Request $request)
    {
        $pesanan = PesananPelanggan::select('pesanan_pelanggans.nik_penerima', 'pesan_jasas.*', 'kategori_layanans.nama_kategori', 'jenis_layanans.nama_layanan', 'jenis_layanans.harga', 'propertis.properti', 'propertis.biaya_properti', 'alamat_pelanggans.label', 'alamat_pelanggans.atas_nama', 'alamat_pelanggans.no_hp', 'alamat_pelanggans.alamat_lengkap', 'alamat_pelanggans.patokan')
            ->join('pesan_jasas', 'pesan_jasas.no_pesanan', '=', 'pesanan_pelanggans.no_pesanan')
            ->join('kategori_layanans', 'kategori_layanans.id', '=', 'pesan_jasas.id_kategori')
            ->join('jenis_layanans', 'jenis_layanans.id', '=', 'pesan_jasas.id_layanan')
            ->join('propertis', 'propertis.id', '=', 'pesan_jasas.id_properti')
            ->join('alamat_pelanggans', 'alamat_pelanggans.id', '=', 'pesan_jasas.id_alamat')
            ->where('pesanan_pelanggans.nik_penerima', '!=', null)
            ->where('pesanan_pelanggans.no_pesanan', $request->pesanan)->first();

        $no_pesanan = !$request->pesanan || $request->pesanan != "" ? $request->pesanan : "";

        $sparepart = Sparepart::join('stok_spareparts', 'spareparts.id', '=', 'stok_spareparts.id_sparepart')->where('stok_spareparts.jumlah', '>', 0)->orderBy('spareparts.nama_sparepart', 'ASC')->get(['spareparts.*', 'stok_spareparts.jumlah']);

        $teknisi = Karyawan::join('identitas_karyawans', 'identitas_karyawans.id', '=', 'karyawans.id_identitas')->where('karyawans.bagian', 'teknisi')->orderBy('karyawans.nik', 'DESC')->get(['karyawans.*', 'identitas_karyawans.nama_lengkap']);

        return Inertia::render('LaporanTeknisi/Create', [
            'pesanan' => $pesanan,
            'teknisi' => $teknisi,
            'no_pesanan' => $no_pesanan,
            'sparepart' => $sparepart
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'no_pesanan' => 'required|numeric',
            'sparepart_id' => 'array',
            'sparepart_qty' => 'array',
            'teknisi_nik' => 'required|array|min:1'
        ]);

        $biaya = 0;

        for ($i = 0; $i < $request->sparepart_id; $i++) {
            $id = $request->sparepart_id[$i];
            $qty = $request->sparepart_qty[$i];
            $sparepart = Sparepart::find($id);
            $biaya += $sparepart->harga * $qty;
        }

        dd($biaya);

        // LaporanTeknisi::create([
        //     'no_pesanan'=>$request->no_pesanan,
        //     'sparepart'=>$sparepart_value,
        //     'teknisi'=>$teknisi_value,
        // ]);
    }
}
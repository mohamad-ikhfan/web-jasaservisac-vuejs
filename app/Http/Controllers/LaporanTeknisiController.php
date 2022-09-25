<?php

namespace App\Http\Controllers;

use App\Models\Karyawan;
use App\Models\LaporanTeknisi;
use App\Models\PesananPelanggan;
use App\Models\PesanJasa;
use App\Models\Sparepart;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LaporanTeknisiController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('LaporanTeknisi/Index', [
            'laporan' => LaporanTeknisi::join('pesanan_pelanggans', 'pesanan_pelanggans.no_pesanan', '=', 'laporan_teknisis.no_pesanan')->when($request->search, function ($query, $search) {
                $query->where('laporan_teknisis.no_pesanan', 'LIKE', '%' . $search . '%');
            })->orderBy('laporan_teknisis.created_at', 'DESC')->paginate(10, ['laporan_teknisis.no_pesanan', 'laporan_teknisis.teknisi', 'pesanan_pelanggans.tanggal_selesai']),
            'teknisi' => Karyawan::join('identitas_karyawans', 'identitas_karyawans.id', '=', 'karyawans.id_identitas')->where('karyawans.bagian', 'teknisi')->get(['karyawans.nik', 'identitas_karyawans.nama_lengkap']),
            'sparepart' => Sparepart::get()
        ]);
    }

    public function create(Request $request)
    {
        $pesanan =  PesananPelanggan::select('pesanan_pelanggans.nik_penerima', 'pesan_jasas.*', 'kategori_layanans.nama_kategori', 'jenis_layanans.nama_layanan', 'jenis_layanans.harga', 'propertis.properti', 'propertis.biaya_properti', 'alamat_pelanggans.label', 'alamat_pelanggans.atas_nama', 'alamat_pelanggans.no_hp', 'alamat_pelanggans.alamat_lengkap', 'alamat_pelanggans.patokan')
            ->join('pesan_jasas', 'pesan_jasas.no_pesanan', '=', 'pesanan_pelanggans.no_pesanan')
            ->join('kategori_layanans', 'kategori_layanans.id', '=', 'pesan_jasas.id_kategori')
            ->join('jenis_layanans', 'jenis_layanans.id', '=', 'pesan_jasas.id_layanan')
            ->join('propertis', 'propertis.id', '=', 'pesan_jasas.id_properti')
            ->join('alamat_pelanggans', 'alamat_pelanggans.id', '=', 'pesan_jasas.id_alamat')
            ->where('pesanan_pelanggans.no_pesanan', $request->no_pesanan)->where('pesan_jasas.status_pesanan', 'di proses')->first();

        $no_pesanan = !$request->no_pesanan || $request->no_pesanan == "" ? "" : $request->no_pesanan;

        $sparepart = Sparepart::join('stok_spareparts', 'spareparts.id', '=', 'stok_spareparts.id_sparepart')->where('stok_spareparts.jumlah', '>', 0)->orderBy('spareparts.nama_sparepart', 'ASC')->get(['spareparts.*', 'stok_spareparts.jumlah']);

        $teknisi = Karyawan::join('identitas_karyawans', 'identitas_karyawans.id', '=', 'karyawans.id_identitas')->where('karyawans.bagian', 'teknisi')->orderBy('karyawans.nik', 'ASC')->get(['karyawans.*', 'identitas_karyawans.nama_lengkap']);

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
            'sparepart_id' => 'array',
            'sparepart_qty' => 'array',
            'teknisi_nik' => 'required|array|min:1'
        ]);

        $biaya_part = 0;
        $part = null;
        if ($request->sparepart_id) {
            // for ($i = 0; $i < $request->sparepart_id; $i++) {
            //     $request->sparepart_id[$i];
            //     $request->sparepart_qty[$i];

            //     // $sparepart = Sparepart::find($id);
            //     // $harga_part = $sparepart->harga;
            //     // $biaya_part += $harga_part * $qty;
            //     // $part = ['id' => $id, 'qty' => $qty];
            // }
            for ($i = 0; $i <= $request->sparepart_id; $i++) {
            }
        }

        dd();

        LaporanTeknisi::create([
            'no_pesanan' => $request->no_pesanan,
            'teknisi' => $request->teknisi_nik,
            'sparepart' => $part,
        ]);

        PesananPelanggan::where('no_pesanan', $request->no_pesanan)->update([
            'tanggal_selesai' => date_create()->format('d-m-Y'),
        ]);

        $pesanjasa = PesanJasa::where('no_pesanan', $request->no_pesanan);

        $pesanjasa->update([
            'status_pesanan' => 'selesai',
            'waktu_selesai' => date_create()->format('d-m-Y'),
            'total_tagihan' => $pesanjasa->first()->total_tagihan + $biaya_part,
            'sparepart' => $part,
        ]);

        return redirect(route('laporan-teknisi.index'))->with('message', 'Laporan berhasil di buat.');
    }
}

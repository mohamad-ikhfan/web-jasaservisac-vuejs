<?php

namespace App\Http\Controllers;

use App\Models\Karyawan;
use App\Models\PesananPelanggan;
use App\Models\PesanJasa;
use App\Models\Sparepart;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PesananPelangganController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function daftarPesanan(Request $request)
    {
        return Inertia::render('PesananPelanggan/daftarPesanan', [
            'pesanan' => PesananPelanggan::join('pesan_jasas', 'pesan_jasas.no_pesanan', '=', 'pesanan_pelanggans.no_pesanan')->when($request->search, function ($query, $search) {
                $query->where('no_pesanan', 'LIKE', '%' . $search . '%');
            })->where('pesanan_pelanggans.nik_penerima', '!=', null)->orderBy('pesanan_pelanggans.created_at', 'DESC')->paginate(10, ['pesanan_pelanggans.*', 'pesan_jasas.status_pesanan'])
        ]);
    }

    public function pesananMasuk(Request $request)
    {
        return Inertia::render('PesananPelanggan/pesananMasuk', [
            'pesanan' => PesananPelanggan::join('pesan_jasas', 'pesan_jasas.no_pesanan', '=', 'pesanan_pelanggans.no_pesanan')->when($request->search, function ($query, $search) {
                $query->where('no_pesanan', 'LIKE', '%' . $search . '%');
            })->where('pesanan_pelanggans.nik_penerima', null)->orderBy('pesanan_pelanggans.created_at', 'DESC')->paginate(10, ['pesanan_pelanggans.*', 'pesan_jasas.status_pesanan'])
        ]);
    }

    public function lihatPesanan($noPesanan)
    {
        $pesanan = PesananPelanggan::select('pesanan_pelanggans.nik_penerima', 'pesan_jasas.*', 'kategori_layanans.nama_kategori', 'jenis_layanans.nama_layanan', 'jenis_layanans.harga', 'propertis.properti', 'propertis.biaya_properti', 'alamat_pelanggans.label', 'alamat_pelanggans.atas_nama', 'alamat_pelanggans.no_hp', 'alamat_pelanggans.alamat_lengkap', 'alamat_pelanggans.patokan')
            ->join('pesan_jasas', 'pesan_jasas.no_pesanan', '=', 'pesanan_pelanggans.no_pesanan')
            ->join('kategori_layanans', 'kategori_layanans.id', '=', 'pesan_jasas.id_kategori')
            ->join('jenis_layanans', 'jenis_layanans.id', '=', 'pesan_jasas.id_layanan')
            ->join('propertis', 'propertis.id', '=', 'pesan_jasas.id_properti')
            ->join('alamat_pelanggans', 'alamat_pelanggans.id', '=', 'pesan_jasas.id_alamat')
            ->where('pesanan_pelanggans.no_pesanan', $noPesanan)->first();
        $sparepart = Sparepart::all();
        $biaya_part = 0;

        if ($pesanan->status_pesanan == 'selesai' && $pesanan->id_sparepart != null) {
            $sparepart_id = explode(",", $pesanan->id_sparepart);
            $sparepart_qty = explode(",", $pesanan->qty_sparepart);
            for ($i = 0; $i < count($sparepart_id); $i++) {
                $id = $sparepart_id[$i];
                $qty =  $sparepart_qty[$i];

                $sparepartis = Sparepart::find($id);

                $harga_part = $sparepartis->harga;

                $biaya_part += $harga_part * $qty;
            }
        }

        return Inertia::render('PesananPelanggan/lihatPesanan', [
            'pesanan' => $pesanan,
            'sparepart' => $sparepart,
            'biaya_part' => $biaya_part
        ]);
    }

    public function terimaPesanan($noPesanan)
    {

        $karyawan = Karyawan::where('id_user', auth()->user()->id)->first();
        $pesanJasa = PesanJasa::where('no_pesanan', $noPesanan)->first();
        $pesanan = PesananPelanggan::where('no_pesanan', $noPesanan);

        $pesanJasa->update([
            'status_pesanan' => 'di proses'
        ]);

        $pesanan->update([
            'nik_penerima' => $karyawan->nik
        ]);

        return redirect(route('pesanan-pelanggan.lihat-pesanan', $noPesanan))->with('message', 'Status pesanan telah di terima, segera hubungi teknisi.');
    }

    public function tolakPesanan($noPesanan)
    {

        $karyawan = Karyawan::where('id_user', auth()->user()->id)->first();
        $pesanJasa = PesanJasa::where('no_pesanan', $noPesanan)->first();
        $pesanan = PesananPelanggan::where('no_pesanan', $noPesanan);

        $pesanJasa->update([
            'status_pesanan' => 'di tolak'
        ]);

        $pesanan->update([
            'nik_penerima' => $karyawan->nik
        ]);

        return redirect(route('pesanan-pelanggan.lihat-pesanan', $noPesanan))->with('message', 'Status pesanan telah di tolak, pesanan tidak dapat di teruskan.');
    }
}

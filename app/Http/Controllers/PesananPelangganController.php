<?php

namespace App\Http\Controllers;

use App\Models\Karyawan;
use App\Models\PenugasanTeknisi;
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
        $pesanan = PesananPelanggan::join('pesan_jasas', 'pesan_jasas.no_pesanan', '=', 'pesanan_pelanggans.no_pesanan')->when($request->search, function ($query, $search) {
            $query->where('no_pesanan', 'LIKE', '%' . $search . '%');
        })->where('pesanan_pelanggans.nik_penerima', '!=', null)->orderBy('pesanan_pelanggans.created_at', 'DESC')->paginate(10, ['pesanan_pelanggans.*', 'pesan_jasas.status_pesanan']);

        return Inertia::render('PesananPelanggan/daftarPesanan', [
            'pesanan' => $pesanan,
        ]);
    }

    public function penugasan()
    {
        $teknisi = Karyawan::where('id_user', auth()->user()->id)->first();
        if ($teknisi->bagian == 'administrasi') {
            $penugasan = PenugasanTeknisi::get();
            foreach ($penugasan as $key => $value) {
                $tugas_teknisi[] = ['no_pesanan' => $value->no_pesanan, 'tanggal_tugas' => $value->tanggal_tugas, 'status_tugas' => $value->status_tugas];
            }
        } else {
            $penugasan = PenugasanTeknisi::where('nik_penerima_tugas', $teknisi->nik)->get();
            foreach ($penugasan as $key => $value) {
                $tugas_teknisi[] = ['no_pesanan' => $value->no_pesanan, 'tanggal_tugas' => $value->tanggal_tugas, 'status_tugas' => $value->status_tugas];
            }
        }

        return Inertia::render('PesananPelanggan/Penugasan', [
            'tugas_teknisi' => $tugas_teknisi
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
        $penugasan = PenugasanTeknisi::join('karyawans', 'karyawans.nik', '=', 'penugasan_teknisis.nik_penerima_tugas')->join('identitas_karyawans', 'identitas_karyawans.id', '=', 'karyawans.id_identitas')->where('no_pesanan', $noPesanan)->orderBy('penugasan_teknisis.nik_penerima_tugas', 'ASC')->get(['karyawans.nik', 'identitas_karyawans.nama_lengkap']);

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

        $karyawan_nik = Karyawan::where('id_user', auth()->user()->id)->first()->nik;
        $kerjakan = PenugasanTeknisi::where('no_pesanan', $noPesanan)->where('nik_penerima_tugas', $karyawan_nik)->first() == null ? false : true;

        return Inertia::render('PesananPelanggan/lihatPesanan', [
            'pesanan' => $pesanan,
            'sparepart' => $sparepart,
            'biaya_part' => $biaya_part,
            'penugasan' => $penugasan,
            'kerjakan' => $kerjakan
        ]);
    }

    public function terimaPesanan($noPesanan)
    {
        $pesanan =  PesananPelanggan::select('pesanan_pelanggans.nik_penerima', 'pesan_jasas.*', 'kategori_layanans.nama_kategori', 'jenis_layanans.nama_layanan', 'jenis_layanans.harga', 'propertis.properti', 'propertis.biaya_properti', 'alamat_pelanggans.label', 'alamat_pelanggans.atas_nama', 'alamat_pelanggans.no_hp', 'alamat_pelanggans.alamat_lengkap', 'alamat_pelanggans.patokan')
            ->join('pesan_jasas', 'pesan_jasas.no_pesanan', '=', 'pesanan_pelanggans.no_pesanan')
            ->join('kategori_layanans', 'kategori_layanans.id', '=', 'pesan_jasas.id_kategori')
            ->join('jenis_layanans', 'jenis_layanans.id', '=', 'pesan_jasas.id_layanan')
            ->join('propertis', 'propertis.id', '=', 'pesan_jasas.id_properti')
            ->join('alamat_pelanggans', 'alamat_pelanggans.id', '=', 'pesan_jasas.id_alamat')
            ->where('pesanan_pelanggans.no_pesanan', $noPesanan)->first();
        $penugasan = PenugasanTeknisi::where('tanggal_tugas', $pesanan->tanggal_booking)->get();
        $teknisi = Karyawan::join('identitas_karyawans', 'identitas_karyawans.id', '=', 'karyawans.id_identitas')->where('karyawans.bagian', 'teknisi')->orderBy('karyawans.nik', 'ASC')->get(['karyawans.*', 'identitas_karyawans.nama_lengkap']);

        foreach ($teknisi as $key => $value) {
            $penugasan = PenugasanTeknisi::where('tanggal_tugas', $pesanan->tanggal_booking)->where('nik_penerima_tugas', $value->nik)->first();
            $teknisi_array[] = ['nik' => $value->nik, 'nama' => $value->nama_lengkap, 'penugasan' => $penugasan != null ? $penugasan->status_tugas : 'tersedia'];
        }

        return Inertia::render('PesananPelanggan/terimaPesanan', [
            'pesanan' => $pesanan,
            'teknisi' => $teknisi_array,
        ]);
    }

    public function alokasiTeknisi(Request $request, $noPesanan)
    {
        $request->validate([
            'teknisi_nik' => 'required|array|min:1'
        ]);

        $teknisi = $request->teknisi_nik;

        $karyawan = Karyawan::where('id_user', auth()->user()->id)->first();
        $pesanJasa = PesanJasa::where('no_pesanan', $noPesanan)->first();
        $pesanan = PesananPelanggan::where('no_pesanan', $noPesanan);

        for ($i = 0; $i < count($teknisi); $i++) {
            $tek = $teknisi[$i];
            PenugasanTeknisi::create([
                'no_pesanan' => $noPesanan,
                'nik_pemberi_tugas' => $karyawan->nik,
                'nik_penerima_tugas' => $tek,
                'tanggal_tugas' => $request->tanggal_tugas,
                'status_tugas' => 'di tugaskan'
            ]);
        }

        $pesanJasa->update([
            'status_pesanan' => 'di proses'
        ]);

        $pesanan->update([
            'nik_penerima' => $karyawan->nik
        ]);

        return redirect(route('pesanan-pelanggan.lihat-pesanan', $noPesanan))->with('message', 'Status pesanan telah di terima, segera hubungi teknisi.');
    }

    public function kerjakanTeknisi($noPesanan)
    {
        $penugasan = PenugasanTeknisi::where('no_pesanan', $noPesanan)->where('status_tugas', 'di tugaskan')->get();

        foreach ($penugasan as $key => $value) {
            $tugas_id[] = $value->id;
        }

        for ($i = 0; $i < count($tugas_id); $i++) {
            $id = $tugas_id[$i];
            PenugasanTeknisi::find($id)->update(['status_tugas' => 'di kerjakan']);
        }

        $pesanJasa = PesanJasa::where('no_pesanan', $noPesanan)->first();

        $pesanJasa->update([
            'status_pesanan' => 'di kerjakan'
        ]);


        return redirect(route('pesanan-pelanggan.lihat-pesanan', $noPesanan))->with('message', 'Status pesanan telah di kerjakan teknisi.');
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
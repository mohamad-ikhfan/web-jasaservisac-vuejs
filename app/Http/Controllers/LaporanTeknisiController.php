<?php

namespace App\Http\Controllers;

use App\Models\Karyawan;
use App\Models\LaporanTeknisi;
use App\Models\PenugasanTeknisi;
use App\Models\PesananPelanggan;
use App\Models\PesanJasa;
use App\Models\Sparepart;
use App\Models\StokSparepart;
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

    public function buat_laporan($noPesanan)
    {
        $pesanan =  PesananPelanggan::select('pesanan_pelanggans.nik_penerima', 'pesan_jasas.*', 'kategori_layanans.nama_kategori', 'jenis_layanans.nama_layanan', 'jenis_layanans.harga', 'propertis.properti', 'propertis.biaya_properti', 'alamat_pelanggans.label', 'alamat_pelanggans.atas_nama', 'alamat_pelanggans.no_hp', 'alamat_pelanggans.alamat_lengkap', 'alamat_pelanggans.patokan')
            ->join('pesan_jasas', 'pesan_jasas.no_pesanan', '=', 'pesanan_pelanggans.no_pesanan')
            ->join('kategori_layanans', 'kategori_layanans.id', '=', 'pesan_jasas.id_kategori')
            ->join('jenis_layanans', 'jenis_layanans.id', '=', 'pesan_jasas.id_layanan')
            ->join('propertis', 'propertis.id', '=', 'pesan_jasas.id_properti')
            ->join('alamat_pelanggans', 'alamat_pelanggans.id', '=', 'pesan_jasas.id_alamat')
            ->where('pesanan_pelanggans.no_pesanan', $noPesanan)->where('pesan_jasas.status_pesanan', 'di kerjakan')->first();

        $sparepart = Sparepart::join('stok_spareparts', 'spareparts.id', '=', 'stok_spareparts.id_sparepart')->where('stok_spareparts.jumlah', '>', 0)->orderBy('spareparts.nama_sparepart', 'ASC')->get(['spareparts.*', 'stok_spareparts.jumlah']);

        $penugasan = PenugasanTeknisi::where('no_pesanan', $noPesanan)->get();
        $teknisi_nik = null;
        foreach ($penugasan as $key => $value) {
            $teknisi_nik[] = $value->nik_penerima_tugas;
        }

        return Inertia::render('LaporanTeknisi/Create', [
            'pesanan' => $pesanan,
            'sparepart' => $sparepart,
            'penugasan' => $teknisi_nik
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'sparepart_id' => 'array',
            'sparepart_qty' => 'array',
        ]);

        $biaya_part = 0;

        $sparepart_id = null;
        $sparepart_qty = null;

        if ($request->sparepart_id) {
            for ($i = 0; $i < count($request->sparepart_id); $i++) {
                $id = $request->sparepart_id[$i];
                $qty = $request->sparepart_qty[$i];

                $sparepart = Sparepart::find($id);
                $harga_part = $sparepart->harga;
                $biaya_part += $harga_part * $qty;
                $stok = StokSparepart::find($sparepart->id);

                if ($stok->jumlah < $qty) {
                    return redirect()->back()->with('message', 'stok sparepart tidak mencukupi.');
                } else {
                    $sisa = $stok->jumlah - $qty;
                    $stok->update([
                        'jumlah' => $sisa
                    ]);
                }
            }

            $sparepart_id = implode(",", $request->sparepart_id);
            $sparepart_qty = implode(",", $request->sparepart_qty);
        }

        $penugasan = PenugasanTeknisi::where('no_pesanan', $request->no_pesanan)->where('status_tugas', 'di kerjakan')->get();

        foreach ($penugasan as $key => $value) {
            $tugas_id[] = $value->id;
        }

        for ($i = 0; $i < count($tugas_id); $i++) {
            $id = $tugas_id[$i];
            PenugasanTeknisi::find($id)->update(['status_tugas' => 'selesai']);
        }

        LaporanTeknisi::create([
            'no_pesanan' => $request->no_pesanan,
            'teknisi' => implode(",", $request->teknisi_nik),
            'id_sparepart' => $sparepart_id,
            'qty_sparepart' => $sparepart_qty
        ]);

        PesananPelanggan::where('no_pesanan', $request->no_pesanan)->update([
            'tanggal_selesai' => date_create()->format('d-m-Y'),
        ]);

        $pesanjasa = PesanJasa::where('no_pesanan', $request->no_pesanan);

        $pesanjasa->update([
            'status_pesanan' => 'selesai',
            'waktu_selesai' => date_create()->format('d-m-Y'),
            'total_tagihan' => $pesanjasa->first()->total_tagihan + $biaya_part,
            'id_sparepart' => $sparepart_id,
            'qty_sparepart' => $sparepart_qty
        ]);

        return redirect(route('laporan-teknisi.index'))->with('message', 'Laporan berhasil di buat.');
    }

    public function show($noPesanan)
    {
        $pesanan =  PesananPelanggan::select('pesanan_pelanggans.nik_penerima', 'pesan_jasas.*', 'kategori_layanans.nama_kategori', 'jenis_layanans.nama_layanan', 'jenis_layanans.harga', 'propertis.properti', 'propertis.biaya_properti', 'alamat_pelanggans.label', 'alamat_pelanggans.atas_nama', 'alamat_pelanggans.no_hp', 'alamat_pelanggans.alamat_lengkap', 'alamat_pelanggans.patokan')
            ->join('pesan_jasas', 'pesan_jasas.no_pesanan', '=', 'pesanan_pelanggans.no_pesanan')
            ->join('kategori_layanans', 'kategori_layanans.id', '=', 'pesan_jasas.id_kategori')
            ->join('jenis_layanans', 'jenis_layanans.id', '=', 'pesan_jasas.id_layanan')
            ->join('propertis', 'propertis.id', '=', 'pesan_jasas.id_properti')
            ->join('alamat_pelanggans', 'alamat_pelanggans.id', '=', 'pesan_jasas.id_alamat')
            ->where('pesanan_pelanggans.no_pesanan', $noPesanan)->first();

        $sparepart = Sparepart::join('laporan_teknisis', 'laporan_teknisis.id_sparepart', '=', 'spareparts.id')->where('no_pesanan', $noPesanan)->get(['spareparts.*', 'laporan_teknisis.qty_sparepart']);

        $penugasan = PenugasanTeknisi::where('no_pesanan', $noPesanan)->get();
        $teknisi = null;
        foreach ($penugasan as $key => $value) {
            $karyawan = Karyawan::join('identitas_karyawans', 'identitas_karyawans.id', '=', 'karyawans.id_identitas')->where('karyawans.nik', $value->nik_penerima_tugas)->first();
            $teknisi[] = ['nik' => $karyawan->nik, 'nama' => $karyawan->nama_lengkap];
        }

        return Inertia::render('LaporanTeknisi/Show', [
            'pesanan' => $pesanan,
            'sparepart' => $sparepart,
            'penugasan' => $teknisi
        ]);
    }
}
<?php

namespace App\Http\Controllers;

use App\Http\Middleware\AddressMiddleware;
use App\Models\AlamatPelanggan;
use App\Models\JenisLayanan;
use App\Models\KategoriLayanan;
use App\Models\Pelanggan;
use App\Models\PesananPelanggan;
use App\Models\PesanJasa;
use App\Models\Properti;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PesanJasaController extends Controller
{
    public function __construct()
    {
        $this->middleware(AddressMiddleware::class);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $id_pelanggan = Pelanggan::where('id_user', auth()->user()->id)->first()->id;
        $pesanan = PesanJasa::join('kategori_layanans', 'kategori_layanans.id', '=', 'pesan_jasas.id_kategori')
            ->join('jenis_layanans', 'jenis_layanans.id', '=', 'pesan_jasas.id_layanan')
            ->join('alamat_pelanggans', 'alamat_pelanggans.id', '=', 'pesan_jasas.id_alamat')
            ->when($request->search, function ($query, $search) {
                $query->where('pesan_jasas.no_pesanan', 'LIKE', '%' . $search . '%')
                    ->orWhere('kategori_layanans.nama_kategori', 'LIKE', '%' . $search . '%')
                    ->orWhere('jenis_layanans.nama_layanan', 'LIKE', '%' . $search . '%')
                    ->orWhere('alamat_pelanggans.label', 'LIKE', '%' . $search . '%');
            })
            ->where('pesan_jasas.id_pelanggan', $id_pelanggan)->orderBy('updated_at', 'DESC')->paginate(10, ['pesan_jasas.*', 'kategori_layanans.nama_kategori', 'jenis_layanans.nama_layanan', 'alamat_pelanggans.label']);

        return Inertia::render('PesanJasa/Index', [
            'pesanan' => $pesanan
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'jenis_layanan' => 'required|integer',
            'unit' => 'required|numeric|min:1',
            'keluhan' => 'required|string|max:255',
            'properti' => 'required|integer|min:1',
            'alamat' => 'required|integer|min:1',
            'tanggal_booking' => 'required|date_format:d-m-Y'
        ]);

        $kategori = KategoriLayanan::where('slug', strtolower(str_replace(' ', '-', $request->kategori)))->first();
        $id_pelanggan = Pelanggan::where('id_user', auth()->user()->id)->first()->id;
        $no_pesanan = $id_pelanggan . $kategori->id . $request->jenis_layanan . str_replace('-', '', $request->tanggal_booking);
        $total_tagihan = ($request->unit * $request->harga_layanan) + $request->biaya_properti;

        $pesanan = PesanJasa::create([
            'no_pesanan' => $no_pesanan,
            'id_pelanggan' => $id_pelanggan,
            'id_kategori' => $kategori->id,
            'id_layanan' => $request->jenis_layanan,
            'unit' => $request->unit,
            'keluhan' => strtolower($request->keluhan),
            'id_properti' => strtolower($request->properti),
            'id_alamat' => $request->alamat,
            'tanggal_booking' => $request->tanggal_booking,
            'total_tagihan' => $total_tagihan,
            'status_pesanan' => 'menunggu konfirmasi',
        ]);

        PesananPelanggan::create([
            'no_pesanan' => $pesanan->no_pesanan,
            'jadwal_pengerjaan' => $pesanan->tanggal_booking
        ]);

        return redirect(route('pesan-jasa.show', $no_pesanan))->with('message', 'Pesanan berhasil di kirim, silahkan tunggu konfirmasi.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PesanJasa  $pesanJasa
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $pesanan = PesanJasa::select('pesan_jasas.*', 'kategori_layanans.nama_kategori', 'jenis_layanans.nama_layanan', 'jenis_layanans.harga', 'propertis.properti', 'propertis.biaya_properti', 'alamat_pelanggans.label', 'alamat_pelanggans.atas_nama', 'alamat_pelanggans.no_hp', 'alamat_pelanggans.alamat_lengkap', 'alamat_pelanggans.patokan')
            ->join('kategori_layanans', 'kategori_layanans.id', '=', 'pesan_jasas.id_kategori')
            ->join('jenis_layanans', 'jenis_layanans.id', '=', 'pesan_jasas.id_layanan')
            ->join('propertis', 'propertis.id', '=', 'pesan_jasas.id_properti')
            ->join('alamat_pelanggans', 'alamat_pelanggans.id', '=', 'pesan_jasas.id_alamat')
            ->where('no_pesanan', $id)->first();

        return Inertia::render('PesanJasa/Show', [
            'pesanan' => $pesanan
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PesanJasa  $pesanJasa
     * @return \Illuminate\Http\Response
     */
    public function edit(PesanJasa $pesanJasa)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PesanJasa  $pesanJasa
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PesanJasa $pesanJasa)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PesanJasa  $pesanJasa
     * @return \Illuminate\Http\Response
     */
    public function destroy(PesanJasa $pesanJasa)
    {
        //
    }

    public function order($id)
    {
        $kategori = KategoriLayanan::where('slug', $id)->first();
        $id_pelanggan = Pelanggan::where('id_user', auth()->user()->id)->first()->id;
        return Inertia::render('PesanJasa/Order', [
            'layanan' => JenisLayanan::where('id_kategori', $kategori->id)->get(),
            'properti' => Properti::all(),
            'alamat' => AlamatPelanggan::where('id_pelanggan', $id_pelanggan)->get(),
            'alamatUtama' => AlamatPelanggan::where('utama', 'y')->first()->id,
            'jasa' => ucwords($kategori->nama_kategori)
        ]);
    }
}

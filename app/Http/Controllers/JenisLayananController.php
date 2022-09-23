<?php

namespace App\Http\Controllers;

use App\Http\Middleware\AccessAdminMiddleware;
use App\Models\JenisLayanan;
use App\Models\KategoriLayanan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JenisLayananController extends Controller
{
    public function __construct()
    {
        $this->middleware(AccessAdminMiddleware::class);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Inertia::render(
            'JenisLayanan/Index',
            [
                'jenis' => JenisLayanan::when($request->search, function ($query, $search) {
                    $query->where('nama_layanan', 'LIKE', '%' . $search . '%');
                })->latest()->paginate(10),
                'kategori' => KategoriLayanan::all()
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('JenisLayanan/Create', [
            'kategori' => KategoriLayanan::all()
        ]);
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
            'kategori' => 'required|integer',
            'nama_layanan' => 'required|string|max:255',
            'harga' => 'required|numeric'
        ]);

        JenisLayanan::create([
            'id_kategori' => strtolower($request->kategori),
            'nama_layanan' => strtolower($request->nama_layanan),
            'harga' => $request->harga
        ]);

        return redirect(route('jenis-layanan.index'))->with('message', 'Data jenis layanan berhasil ditambahkan.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\JenisLayanan  $jenisLayanan
     * @return \Illuminate\Http\Response
     */
    public function show(JenisLayanan $jenisLayanan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\JenisLayanan  $jenisLayanan
     * @return \Illuminate\Http\Response
     */
    public function edit(JenisLayanan $jenisLayanan)
    {
        return Inertia::render('JenisLayanan/Edit', [
            'kategori' => KategoriLayanan::all(),
            'jenis' => $jenisLayanan
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\JenisLayanan  $jenisLayanan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, JenisLayanan $jenisLayanan)
    {
        $request->validate([
            'kategori' => 'required|integer',
            'nama_layanan' => 'required|string|max:255',
            'harga' => 'required|numeric'
        ]);

        $jenisLayanan->update([
            'id_kategori' => strtolower($request->kategori),
            'nama_layanan' => strtolower($request->nama_layanan),
            'harga' => $request->harga
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\JenisLayanan  $jenisLayanan
     * @return \Illuminate\Http\Response
     */
    public function destroy(JenisLayanan $jenisLayanan)
    {
        $jenisLayanan->delete();
        return redirect(route('jenis-layanan.index'))->with('message', 'Data jenis layanan berhasil dihapus.');
    }
}
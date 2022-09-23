<?php

namespace App\Http\Controllers;

use App\Http\Middleware\AccessAdminMiddleware;
use App\Models\KategoriLayanan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class KategoriLayananController extends Controller
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
            'KategoriLayanan/Index',
            [
                'layanan' => KategoriLayanan::when($request->search, function ($query, $search) {
                    $query->where('nama_kategori', 'LIKE', '%' . $search . '%');
                })->latest()->paginate(10),
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
        return Inertia::render('KategoriLayanan/Create');
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
            'logo' => 'required|mimes:jpg,jpeg,png,webp|max:1024',
            'nama_kategori' => 'required|string|max:255',
            'deskripsi' => 'required|string|max:255'
        ]);

        $file = $request->file('logo');
        $file_name = 'logo_' . time() . '.' . $file->getClientOriginalExtension();
        $path = public_path('images/logo/');
        $file->move($path, $file_name);

        KategoriLayanan::create([
            'logo' => $file_name,
            'nama_kategori' => strtolower($request->nama_kategori),
            'slug' => strtolower(str_replace(' ', '-', $request->nama_kategori)),
            'deskripsi' => strtolower($request->deskripsi),
        ]);

        return redirect(route('kategori-layanan.index'))->with('message', 'Data kategori layanan berhasil ditambahkan.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\KategoriLayanan  $kategoriLayanan
     * @return \Illuminate\Http\Response
     */
    public function show(KategoriLayanan $kategoriLayanan)
    {
        return Inertia::render('KategoriLayanan/Show', [
            'layanan' => $kategoriLayanan
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\KategoriLayanan  $kategoriLayanan
     * @return \Illuminate\Http\Response
     */
    public function edit(KategoriLayanan $kategoriLayanan)
    {
        return Inertia::render('KategoriLayanan/Edit', [
            'layanan' => $kategoriLayanan
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\KategoriLayanan  $kategoriLayanan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, KategoriLayanan $kategoriLayanan)
    {
        $request->validate([
            'nama_kategori' => 'required|string|max:255',
            'deskripsi' => 'required|string|max:255'
        ]);

        $kategoriLayanan->update([
            'nama_kategori' => strtolower($request->nama_kategori),
            'slug' => strtolower(str_replace(' ', '-', $request->nama_kategori)),
            'deskripsi' => strtolower($request->deskripsi),
        ]);

        return redirect(route('kategori-layanan.index'))->with('message', 'Data kategori layanan berhasil diubah.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\KategoriLayanan  $kategoriLayanan
     * @return \Illuminate\Http\Response
     */
    public function destroy(KategoriLayanan $kategoriLayanan)
    {
        $path = public_path('images/logo/') . $kategoriLayanan->logo;

        if (File::exists($path)) {
            unlink($path);
        }

        $kategoriLayanan->delete();

        return redirect(route('kategori-layanan.index'))->with('message', 'Data kategori layanan berhasil dihapus.');
    }
}
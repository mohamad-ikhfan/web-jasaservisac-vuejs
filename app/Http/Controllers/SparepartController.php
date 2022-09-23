<?php

namespace App\Http\Controllers;

use App\Http\Middleware\AccessAdminMiddleware;
use App\Models\Sparepart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class SparepartController extends Controller
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
            'Sparepart/Index',
            [
                'sparepart' => Sparepart::when($request->search, function ($query, $search) {
                    $query->where('nama_sparepart', 'LIKE', '%' . $search . '%');
                })->latest()->paginate(10)
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
        return Inertia::render('Sparepart/Create');
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
            'nama_sparepart' => 'required|string|max:255',
            'harga' => 'required|numeric',
            'keterangan' => 'required|string|max:255',
            'gambar' => 'mimes:jpg,jpeg,png,webp|max:1024'
        ]);

        $file = $request->file('gambar');
        $file_name = 'gambar_' . time() . '.' . $file->getClientOriginalExtension();
        $path = public_path('images/sparepart/');
        $file->move($path, $file_name);

        Sparepart::create([
            'nama_sparepart' => strtolower($request->nama_sparepart),
            'harga' => $request->harga,
            'keterangan' => strtolower($request->keterangan),
            'gambar' => $file_name
        ]);

        return redirect(route('sparepart.index'))->with('message', 'Data sparepart berhasil ditambahkan.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Sparepart  $sparepart
     * @return \Illuminate\Http\Response
     */
    public function show(Sparepart $sparepart)
    {
        return Inertia::render('Sparepart/Show', [
            'sparepart' => $sparepart
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Sparepart  $sparepart
     * @return \Illuminate\Http\Response
     */
    public function edit(Sparepart $sparepart)
    {
        return Inertia::render('Sparepart/Edit', [
            'sparepart' => $sparepart
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Sparepart  $sparepart
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Sparepart $sparepart)
    {
        $request->validate([
            'nama_sparepart' => 'required|string|max:255',
            'harga' => 'required|numeric',
            'keterangan' => 'required|string|max:255'
        ]);

        $sparepart->update([
            'nama_sparepart' => strtolower($request->nama_sparepart),
            'harga' => $request->harga,
            'keterangan' => strtolower($request->keterangan)
        ]);

        return redirect(route('sparepart.index'))->with('message', 'Data sparepart berhasil diubah.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Sparepart  $sparepart
     * @return \Illuminate\Http\Response
     */
    public function destroy(Sparepart $sparepart)
    {
        $path = public_path('images/sparepart/') . $sparepart->gambar;

        if (File::exists($path)) {
            unlink($path);
        }

        $sparepart->delete();

        return redirect(route('sparepart.index'))->with('message', 'Data sparepart berhasil dihapus.');
    }
}
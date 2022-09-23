<?php

namespace App\Http\Controllers;

use App\Http\Middleware\AccessAdminMiddleware;
use App\Models\Sparepart;
use App\Models\StokSparepart;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StokSparepartController extends Controller
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

        return Inertia::render('StokSparepart/Index', [
            'stok_sparepart' => StokSparepart::join('spareparts', 'stok_spareparts.id_sparepart', '=', 'spareparts.id')->when($request->search, function ($query, $search) {
                $query->where('spareparts.nama_sparepart', 'LIKE', '%' . $search . '%');
            })->orderBy('updated_at', 'DESC')->paginate(10, ['spareparts.nama_sparepart', 'stok_spareparts.*'])
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('StokSparepart/Create', [
            'sparepart' => Sparepart::all()
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
            'sparepart' => 'required|integer',
            'jumlah' => 'required|numeric'
        ]);

        $stok = StokSparepart::where('id_sparepart', $request->sparepart)->where('tipe', 'masuk')->first();

        if ($stok) {
            $sisa = $stok->jumlah + $request->jumlah;
            $update = StokSparepart::findOrfail($stok->id);
            $update->update([
                'jumlah' => $sisa
            ]);

            return redirect(route('stok-sparepart.index'))->with('message', 'Data stok berhasil ditambahkan.');
        }

        StokSparepart::create([
            'id_sparepart' => $request->sparepart,
            'jumlah' => $request->jumlah,
            'tipe' => 'masuk'
        ]);

        return redirect(route('stok-sparepart.index'))->with('message', 'Data stok berhasil ditambahkan.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\StokSparepart  $stokSparepart
     * @return \Illuminate\Http\Response
     */
    public function show(StokSparepart $stokSparepart)
    {
        return Inertia::render('StokSparepart/Show', [
            'sparepart' => Sparepart::all(),
            'stok_sparepart' => $stokSparepart
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\StokSparepart  $stokSparepart
     * @return \Illuminate\Http\Response
     */
    public function edit(StokSparepart $stokSparepart)
    {
        return Inertia::render('StokSparepart/Edit', [
            'sparepart' => Sparepart::all(),
            'stok_sparepart' => $stokSparepart
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\StokSparepart  $stokSparepart
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, StokSparepart $stokSparepart)
    {
        $request->validate([
            'sparepart' => 'required|integer',
            'jumlah' => 'required|numeric'
        ]);

        $stokSparepart->update([
            'id_sparepart' => $request->sparepart,
            'jumlah' => $request->jumlah
        ]);

        return redirect(route('stok-sparepart.index'))->with('message', 'Data stok berhasil diubah.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\StokSparepart  $stokSparepart
     * @return \Illuminate\Http\Response
     */
    public function destroy(StokSparepart $stokSparepart)
    {
        $stokSparepart->delete();
        return redirect(route('stok-sparepart.index'))->with('message', 'Data stok berhasil dihapus.');
    }
}
<?php

namespace App\Http\Controllers;

use App\Models\AlamatPelanggan;
use App\Models\Pelanggan;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Propaganistas\LaravelPhone\PhoneNumber;

class AlamatPelangganController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $id_pelanggan = Pelanggan::where('id_user', auth()->user()->id)->first()->id;
        return Inertia::render(
            'AlamatPelanggan/Index',
            [
                'alamat' => AlamatPelanggan::when($request->search, function ($query, $search) {
                    $query->where('label', 'LIKE', '%' . $search . '%');
                })->where('id_pelanggan', $id_pelanggan)->latest()->paginate(10)
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
        return Inertia::render('AlamatPelanggan/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $pelanggan = Pelanggan::where('id_user', auth()->user()->id)->first();
        $request->validate([
            'label' => 'required|string|max:255|unique:alamat_pelanggans,id_pelanggan,' . $pelanggan->id,
            'atas_nama' => 'required|string|max:255',
            'no_hp' => 'required|string|phone:ID,mobile',
            'alamat_lengkap' => 'required|string|max:255',
            'patokan' => 'required|string|max:255',
        ]);

        $id_pelanggan = Pelanggan::where('id_user', auth()->user()->id)->first()->id;
        $utama = 'y';
        if (AlamatPelanggan::where('id_pelanggan', $id_pelanggan)->count()) {
            $utama = 'n';
        }

        AlamatPelanggan::create([
            'id_pelanggan' => $id_pelanggan,
            'label' => strtolower($request->label),
            'atas_nama' => strtolower($request->atas_nama),
            'no_hp' => PhoneNumber::make($request->no_hp, 'ID')->formatForMobileDialingInCountry('ID'),
            'alamat_lengkap' => strtolower($request->alamat_lengkap),
            'patokan' => strtolower($request->patokan),
            'utama' => $utama
        ]);

        return redirect(route('alamat-pelanggan.index'))->with('message', 'Alamat berhasil ditambahkan.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\AlamatPelanggan  $alamatPelanggan
     * @return \Illuminate\Http\Response
     */
    public function show(AlamatPelanggan $alamatPelanggan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\AlamatPelanggan  $alamatPelanggan
     * @return \Illuminate\Http\Response
     */
    public function edit(AlamatPelanggan $alamatPelanggan)
    {
        return Inertia::render('AlamatPelanggan/Edit', [
            'alamat' => $alamatPelanggan
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\AlamatPelanggan  $alamatPelanggan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AlamatPelanggan $alamatPelanggan)
    {
        if ($request->only('utama')) {
            $default = AlamatPelanggan::where('utama', 'y');
            $default->update(['utama' => 'n']);
            $alamatPelanggan->update([
                'utama' => 'y'
            ]);
            return redirect(route('alamat-pelanggan.index'));
        }
        $request->validate([
            'label' => 'required|string|max:255|unique:alamat_pelanggans,label,' . $alamatPelanggan->id,
            'atas_nama' => 'required|string|max:255',
            'no_hp' => 'required|string|max:255|phone:ID,mobile',
            'alamat_lengkap' => 'required|string|max:255',
            'patokan' => 'required|string|max:255',
        ]);

        $alamatPelanggan->update([
            'label' => strtolower($request->label),
            'atas_nama' => strtolower($request->atas_nama),
            'no_hp' => PhoneNumber::make($request->no_hp, 'ID')->formatForMobileDialingInCountry('ID'),
            'alamat_lengkap' => strtolower($request->alamat_lengkap),
            'patokan' => strtolower($request->patokan),
        ]);

        return redirect(route('alamat-pelanggan.index'))->with('message', 'Alamat berhasil di ubah.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\AlamatPelanggan  $alamatPelanggan
     * @return \Illuminate\Http\Response
     */
    public function destroy(AlamatPelanggan $alamatPelanggan)
    {
        $alamatPelanggan->delete();
        return redirect(route('alamat-pelanggan.index'))->with('message', 'Alamat berhasil di hapus.');
    }
}
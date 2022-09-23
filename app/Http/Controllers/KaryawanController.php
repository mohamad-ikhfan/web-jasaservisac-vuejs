<?php

namespace App\Http\Controllers;

use App\Http\Middleware\AccessAdminMiddleware;
use App\Models\IdentitasKaryawan;
use App\Models\Karyawan;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;
use Propaganistas\LaravelPhone\PhoneNumber;

class KaryawanController extends Controller
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
        return Inertia::render('Karyawan/Index', [
            'karyawan' => Karyawan::join('identitas_karyawans', 'identitas_karyawans.id', '=', 'karyawans.id_identitas')->when($request->search, function ($query, $search) {
                $query->where('nik', 'LIKE', '%' . $search . '%');
            })->latest()->paginate(10, ['identitas_karyawans.nama_lengkap', 'karyawans.*'])
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Karyawan/Create');
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
            'foto' => 'required|mimes:jpg,jpeg,png,webp|max:1024',
            'foto_ktp' => 'required|mimes:jpg,jpeg,png,webp|max:1024',
            'nama_lengkap' => 'required|string|max:255',
            'no_hp' => 'required|phone:ID,mobile|string|max:255|unique:karyawans',
            'email' => 'required|string|email|max:255|unique:karyawans',
            'bagian' => 'required|string|max:255',
            'nomor_identitas' => 'required|numeric|digits:16|unique:identitas_karyawans',
            'tempat_lahir' => 'required|string|max:255',
            'tanggal_lahir' => 'required|string|date_format:d-m-Y',
            'jenis_kelamin' => 'required|string|max:255',
            'status_perkawinan' => 'required|string|max:255',
            'rt' => 'required|numeric',
            'rw' => 'required|numeric',
            'kelurahan' => 'required|string|max:255',
            'kecamatan' => 'required|string|max:255',
            'kota' => 'required|string|max:255',
            'agama' => 'required|string|max:255',
            'pekerjaan' => 'required|string|max:255',
            'kewarganegaraan' => 'required|string|max:255'
        ]);

        $path_foto = $request->file('foto');
        $path_foto_name = 'foto_' . time() . '.' . $path_foto->getClientOriginalExtension();
        $path = public_path('images/karyawan/foto/');
        $path_foto->move($path, $path_foto_name);

        $path_foto_ktp = $request->file('foto_ktp');
        $path_foto_ktp_name = 'ktp_' . time() . '.' . $path_foto_ktp->getClientOriginalExtension();
        $path = public_path('images/karyawan/ktp/');
        $path_foto_ktp->move($path, $path_foto_ktp_name);

        $identitas_karyawan = IdentitasKaryawan::create([
            'nomor_identitas' => $request->nomor_identitas,
            'nama_lengkap' => strtolower($request->nama_lengkap),
            'tempat_lahir' => strtolower($request->tempat_lahir),
            'tanggal_lahir' => $request->tanggal_lahir,
            'jenis_kelamin' => strtolower($request->jenis_kelamin),
            'rt_rw' => $request->rt . '/' . $request->rw,
            'kelurahan' => strtolower($request->kelurahan),
            'kecamatan' => strtolower($request->kecamatan),
            'kota' => strtolower($request->kota),
            'agama' => strtolower($request->agama),
            'status_perkawinan' => strtolower(str_replace('_', ' ', $request->status_perkawinan)),
            'pekerjaan' => strtolower($request->pekerjaan),
            'kewarganegaraan' => strtolower($request->kewarganegaraan),
            'path_foto_ktp' => $path_foto_ktp_name
        ]);

        $karyawan = Karyawan::create([
            'nik' => 0000,
            'path_foto' => $path_foto_name,
            'no_hp' => PhoneNumber::make($request->no_hp, 'ID')->formatForMobileDialingInCountry('ID'),
            'email' => strtolower($request->email),
            'id_identitas' => $identitas_karyawan->id,
            'bagian' => $request->bagian
        ]);

        $user_id = null;

        if ($request->bagian == 'administrasi') {
            $user = User::create([
                'name' => $identitas_karyawan->nama_lengkap,
                'email' => $karyawan->first()->email,
                'password' => bcrypt(str_replace('-', '', $identitas_karyawan->tanggal_lahir)),
                'profile_photo_path' => $karyawan->path_foto,
                'role' => 'karyawan'
            ]);

            $user_id = $user->id;
        }

        $numlength = strlen((string)$karyawan->id);
        if ($numlength == 1) {
            $nik = '000' . $karyawan->id;
        } elseif ($numlength == 2) {
            $nik = '00' . $karyawan->id;
        } elseif ($numlength == 3) {
            $nik = '0' . $karyawan->id;
        } else {
            $nik = $karyawan->id;
        }

        $pdate_karyawan = Karyawan::findOrFail($karyawan->id);
        $pdate_karyawan->update([
            'nik' => $nik,
            'id_user' => $user_id
        ]);

        return redirect(route('karyawan.index'))->with('message', 'Data karyawan berhasil ditambahkan.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Karyawan  $karyawan
     * @return \Illuminate\Http\Response
     */
    public function show(Karyawan $karyawan)
    {
        $identitas_karyawan = IdentitasKaryawan::select('identitas_karyawans.*', 'karyawans.*')->join('karyawans', 'karyawans.id_identitas', '=', 'identitas_karyawans.id')->where('karyawans.id', $karyawan->id)->first();
        return Inertia::render('Karyawan/Show', [
            'karyawan' => $identitas_karyawan
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Karyawan  $karyawan
     * @return \Illuminate\Http\Response
     */
    public function edit(Karyawan $karyawan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Karyawan  $karyawan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Karyawan $karyawan)
    {
        $request->validate([
            'nama_lengkap' => 'required|string|max:255',
            'no_hp' => 'required|phone:ID,mobile|string|max:255|unique:karyawans,no_hp,' . $karyawan->id,
            'email' => 'required|string|email|max:255|unique:karyawans,email,' . $karyawan->id,
            'bagian' => 'required|string|max:255',
            'nomor_identitas' => 'required|numeric|digits:16|unique:identitas_karyawans,nomor_identitas,' . $karyawan->id_identitas,
            'tempat_lahir' => 'required|string|max:255',
            'tanggal_lahir' => 'required|string|date_format:d-m-Y',
            'jenis_kelamin' => 'required|string|max:255',
            'status_perkawinan' => 'required|string|max:255',
            'rt' => 'required|numeric',
            'rw' => 'required|numeric',
            'kelurahan' => 'required|string|max:255',
            'kecamatan' => 'required|string|max:255',
            'kota' => 'required|string|max:255',
            'agama' => 'required|string|max:255',
            'pekerjaan' => 'required|string|max:255',
            'kewarganegaraan' => 'required|string|max:255'
        ]);

        $identitas_karyawan = IdentitasKaryawan::findOrFail($karyawan->id_identitas);

        $identitas_karyawan->update([
            'nomor_identitas' => $request->nomor_identitas,
            'nama_lengkap' => strtolower($request->nama_lengkap),
            'tempat_lahir' => strtolower($request->tempat_lahir),
            'tanggal_lahir' => $request->tanggal_lahir,
            'jenis_kelamin' => strtolower($request->jenis_kelamin),
            'rt_rw' => $request->rt . '/' . $request->rw,
            'kelurahan' => strtolower($request->kelurahan),
            'kecamatan' => strtolower($request->kecamatan),
            'kota' => strtolower($request->kota),
            'agama' => strtolower($request->agama),
            'status_perkawinan' => strtolower(str_replace('_', ' ', $request->status_perkawinan)),
            'pekerjaan' => strtolower($request->pekerjaan),
            'kewarganegaraan' => strtolower($request->kewarganegaraan),
        ]);

        $karyawan->update([
            'no_hp' => PhoneNumber::make($request->no_hp, 'ID')->formatForMobileDialingInCountry('ID'),
            'email' => strtolower($request->email),
            'bagian' => $request->bagian
        ]);

        return redirect(route('karyawan.show', $karyawan->nik))->with('message', 'Data Karyawan berhasil di ubah.');
    }

    public function updateFile(Request $request, Karyawan $karyawan)
    {
        if ($request->only('foto')) {

            $request->validate([
                'foto' => 'required|mimes:jpg,jpeg,png,webp|max:1024',
            ]);

            $path = public_path('images/karyawan/foto/');

            if (File::exists($path . $karyawan->path_foto)) {
                unlink($path . $karyawan->path_foto);
            }

            $path_foto = $request->file('foto');
            $path_foto_name = 'foto_' . time() . '.' . $path_foto->getClientOriginalExtension();
            $path_foto->move($path, $path_foto_name);

            $karyawan->update([
                'path_foto' => $path_foto_name
            ]);

            return redirect(route('karyawan.show', $karyawan->nik))->with('message', 'Foto berhasil di ubah.');
        }

        if ($request->only('foto_ktp')) {
            $request->validate([
                'foto_ktp' => 'required|mimes:jpg,jpeg,png,webp|max:1024',
            ]);

            $identitasKaryawan = IdentitasKaryawan::findOrFail($karyawan->id_identitas);

            $path = public_path('images/karyawan/ktp/');

            if (File::exists($path . $identitasKaryawan->path_foto_ktp)) {
                unlink($path . $identitasKaryawan->path_foto_ktp);
            }

            $path_foto_ktp = $request->file('foto_ktp');
            $path_foto_ktp_name = 'ktp_' . time() . '.' . $path_foto_ktp->getClientOriginalExtension();
            $path_foto_ktp->move($path, $path_foto_ktp_name);

            $identitasKaryawan->update([
                'path_foto_ktp' => $path_foto_ktp_name
            ]);

            return redirect(route('karyawan.show', $karyawan->nik))->with('message', 'Foto KTP berhasil di ubah.');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Karyawan  $karyawan
     * @return \Illuminate\Http\Response
     */
    public function destroy(Karyawan $karyawan)
    {
        //
    }
}
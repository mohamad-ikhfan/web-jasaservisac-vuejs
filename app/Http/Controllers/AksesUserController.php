<?php

namespace App\Http\Controllers;

use App\Http\Middleware\AccessAdminMiddleware;
use App\Models\IdentitasKaryawan;
use App\Models\Karyawan;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AksesUserController extends Controller
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
        return Inertia::render('AksesUser/Index', [
            'karyawan' => User::join('karyawans', 'karyawans.id_user', '=', 'users.id')
                ->join('identitas_karyawans', 'identitas_karyawans.id', '=', 'karyawans.id_identitas')
                ->when($request->search, function ($query, $search) {
                    $query->where('karyawans.nik', 'LIKE', '%' . $search . '%')
                        ->orWhere('users.email', 'LIKE', '%' . $search . '%');
                })->orderBy('users.created_at', 'DESC')->paginate(10, ['identitas_karyawans.nama_lengkap', 'karyawans.nik', 'users.email', 'users.email_verified_at', 'users.role'])
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        return Inertia::render('AksesUser/Create', [
            'karyawan' => Karyawan::select('identitas_karyawans.nama_lengkap', 'identitas_karyawans.tanggal_lahir', 'karyawans.*')
                ->join('identitas_karyawans', 'identitas_karyawans.id', '=', 'karyawans.id_identitas')
                ->where('karyawans.id_user', null)
                ->where('karyawans.nik', $request->search)->first()
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
            'nik' => 'required',
        ]);

        $karyawan = Karyawan::where('nik', $request->nik);
        $identitas = IdentitasKaryawan::findOrFail($karyawan->first()->id_identitas);

        $user = User::create([
            'name' => $identitas->nama_lengkap,
            'email' => $karyawan->first()->email,
            'password' => bcrypt(str_replace('-', '', $identitas->tanggal_lahir)),
            'profile_photo_path' => $karyawan->first()->path_foto,
            'role' => 'karyawan'
        ]);

        $karyawan->update([
            'id_user' => $user->id
        ]);

        return redirect(route('akses-user.index'))->with('message', 'Akses user berhasil di buat.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function resetPassword($id)
    {
        $karyawan = Karyawan::where('nik', $id)->first();
        $user = User::findOrFail($karyawan->id_user);
        $identitas = IdentitasKaryawan::findOrFail($karyawan->id_identitas);

        $user->forceFill([
            'password' => bcrypt(str_replace('-', '', $identitas->tanggal_lahir)),
        ])->save();

        return redirect(route('akses-user.index'))->with('message', 'Password user berhasil di reset.');
    }
}
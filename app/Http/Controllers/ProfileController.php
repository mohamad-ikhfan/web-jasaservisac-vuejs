<?php

namespace App\Http\Controllers;

use App\Models\Karyawan;
use App\Models\Pelanggan;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Rules\MatchOldPassword;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class ProfileController extends Controller
{

    use \App\Actions\Fortify\PasswordValidationRules;

    public function karyawan()
    {
        $user_id = auth()->user()->id;

        return Inertia::render('Profiles/Karyawan', [
            'karyawan' => Karyawan::select('karyawans.nik', 'users.name', 'users.email')
                ->join('users', 'users.id', '=', 'karyawans.id_user')
                ->where('karyawans.id_user', $user_id)->first()
        ]);
    }

    public function pelanggan()
    {
        $user_id = auth()->user()->id;

        return Inertia::render('Profiles/Pelanggan', [
            'pelanggan' => Pelanggan::select('users.name', 'users.email')
                ->join('users', 'users.id', '=', 'pelanggans.id_user')
                ->where('pelanggans.id_user', $user_id)->first()
        ]);
    }

    public function ubahPassword(Request $request)
    {
        $request->validate([
            'password_lama' => ['required', new MatchOldPassword],
            'password_baru' => $this->passwordRules(),
        ]);

        $user = User::find(auth()->user()->id);

        $user->update([
            'password' => Hash::make($request->password_baru),
        ]);

        Session::flush();

        Auth::guard('web')->logout();

        return redirect(route('login'))->with('message', 'Password berhasil di ubah, silahkan login kembali.');
    }
}
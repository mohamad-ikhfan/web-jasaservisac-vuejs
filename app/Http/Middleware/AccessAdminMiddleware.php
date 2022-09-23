<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AccessAdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if (auth()->user()->role == 'pemilik') {
            return $next($request);
        }

        $user_id = auth()->user()->id;
        $karyawan = \App\Models\Karyawan::where('id_user', $user_id)->first();

        if ($karyawan->bagian == 'administrasi') {
            return $next($request);
        }

        return redirect(route('dashboard'))->with('message', 'Anda tidak di izinkan akses halaman tersebut.');
    }
}
<?php

namespace App\Http\Middleware;

use App\Models\AlamatPelanggan;
use App\Models\Pelanggan;
use Closure;
use Illuminate\Http\Request;

class AddressMiddleware
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
        $pelanggan = Pelanggan::where('id_user', auth()->user()->id)->first();

        if (!AlamatPelanggan::where('id_pelanggan', $pelanggan->id)->count()) {
            return redirect(route('alamat-pelanggan.index'))->with('message', 'Anda belum menambahkan alamat, silahkan menambah alamat terlebih dulu.');
        }

        return $next($request);
    }
}
<?php

namespace App\Providers;

use App\Models\Karyawan;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        Inertia::share('app', function () {
            return [
                'name' => env('APP_NAME'),
            ];
        });
        Inertia::share('flash', function () {
            return [
                'message' => Session::get('message'),
            ];
        });
        Inertia::share('asset', function () {
            return asset('images');
        });
        Inertia::share('akses', function () {
            $karyawan = '';
            if (auth()->user()) {
                if (auth()->user()->role == 'karyawan') {
                    $karyawan = Karyawan::where('id_user', auth()->user()->id)->first()->bagian;
                }
            }
            return [
                'pemilik' => auth()->user() ? auth()->user()->role == 'pemilik' : false,
                'pelanggan' => auth()->user() ? auth()->user()->role == 'pelanggan' : false,
                'admin' => auth()->user() ? $karyawan == 'administrasi' : false,
                'teknisi' => auth()->user() ? $karyawan == 'teknisi' : false,
                'role' => auth()->user() ? auth()->user()->role : ''
            ];
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}

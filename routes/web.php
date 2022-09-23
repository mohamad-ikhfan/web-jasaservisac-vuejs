<?php

use App\Http\Controllers\AksesUserController;
use App\Http\Controllers\AlamatPelangganController;
use App\Http\Controllers\JenisLayananController;
use App\Http\Controllers\KaryawanController;
use App\Http\Controllers\KategoriLayananController;
use App\Http\Controllers\LaporanTeknisiController;
use App\Http\Controllers\PelangganController;
use App\Http\Controllers\PesananPelangganController;
use App\Http\Controllers\PesanJasaController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SparepartController;
use App\Http\Controllers\StokSparepartController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::withoutMiddleware()->group(function () {
    Route::get('/', function () {
        return Inertia::render('Home', [
            'layanan' => \App\Models\KategoriLayanan::all()
        ]);
    })->name('home');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
    'pelanggan'
])->group(function () {
    Route::get('pesan-jasa/layanan/{id}', [PesanJasaController::class, 'order'])->name('pesan-jasa.order');
    Route::resource('pesan-jasa', PesanJasaController::class)->except('create', 'edit', 'update');

    Route::resource('alamat-pelanggan', AlamatPelangganController::class)->except('show');

    Route::get('profile-pelanggan', [ProfileController::class, 'pelanggan'])->name('profile-pelanggan.show');
    Route::post('profile-pelanggan/change-password', [ProfileController::class, 'ubahPassword'])->name('profile-pelanggan.change-password');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified', 'karyawan'
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::resource('jenis-layanan', JenisLayananController::class)->except('show');
    Route::resource('kategori-layanan', KategoriLayananController::class);
    Route::resource('sparepart', SparepartController::class);
    Route::resource('stok-sparepart', StokSparepartController::class);

    Route::resource('karyawan', KaryawanController::class)->except('edit');
    Route::post('karyawan/update-file/{karyawan}', [KaryawanController::class, 'updateFile'])->name('karyawan.update.file');

    Route::resource('akses-user', AksesUserController::class)->except('show', 'edit', 'update', 'destroy');
    Route::post('akses-user/reset-password/{id}', [AksesUserController::class, 'resetPassword'])->name('akses-user.reset-password');

    Route::get('pesanan-pelanggan/daftar-pesanan', [PesananPelangganController::class, 'daftarPesanan'])->name('pesanan-pelanggan.daftar-pesanan');
    Route::get('pesanan-pelanggan/pesanan-masuk', [PesananPelangganController::class, 'pesananMasuk'])->name('pesanan-pelanggan.pesanan-masuk');
    Route::get('pesanan-pelanggan/lihat-pesanan/{no_pesanan}', [PesananPelangganController::class, 'lihatPesanan'])->name('pesanan-pelanggan.lihat-pesanan');
    Route::post('pesanan-pelanggan/terima-pesanan/{no_pesanan}', [PesananPelangganController::class, 'terimaPesanan'])->name('pesanan-pelanggan.terima-pesanan');
    Route::post('pesanan-pelanggan/tolak-pesanan/{no_pesanan}', [PesananPelangganController::class, 'tolakPesanan'])->name('pesanan-pelanggan.tolak-pesanan');

    Route::get('pelanggan', [PelangganController::class, 'index'])->name('pelanggan.index');

    Route::get('profile-karyawan', [ProfileController::class, 'karyawan'])->name('profile-karyawan.show');
    Route::post('profile-karyawan/change-password', [ProfileController::class, 'ubahPassword'])->name('profile-karyawan.change-password');

    Route::get('laporan-teknisi', [LaporanTeknisiController::class, 'index'])->name('laporan-teknisi.index');
    Route::get('laporan-teknisi/create', [LaporanTeknisiController::class, 'create'])->name('laporan-teknisi.create');
    Route::post('laporan-teknisi/create', [LaporanTeknisiController::class, 'store'])->name('laporan-teknisi.store');
});
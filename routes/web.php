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
    Route::get('pesan-jasa', [PesanJasaController::class, 'index'])->name('pesan-jasa.index');
    Route::post('pesan-jasa/store', [PesanJasaController::class, 'store'])->name('pesan-jasa.store');
    Route::get('pesan-jasa/show/{id}', [PesanJasaController::class, 'show'])->name('pesan-jasa.show');
    Route::get('pesan-jasa/layanan/{id}', [PesanJasaController::class, 'order'])->name('pesan-jasa.order');
    // Route::resource('pesan-jasa', PesanJasaController::class)->except('create', 'edit', 'update');
    // Route::get('pesan-jasa/invoice/{id}', PesanJasaController::class, 'invoice')->name('pesan-jasa.invoice');

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

    Route::get('pesanan-pelanggan/tugas-teknisi', [PesananPelangganController::class, 'penugasan'])->name('pesanan-pelanggan.penugasan');
    Route::get('pesanan-pelanggan/daftar-pesanan', [PesananPelangganController::class, 'daftarPesanan'])->name('pesanan-pelanggan.daftar-pesanan');
    Route::get('pesanan-pelanggan/pesanan-masuk', [PesananPelangganController::class, 'pesananMasuk'])->name('pesanan-pelanggan.pesanan-masuk');
    Route::get('pesanan-pelanggan/lihat-pesanan/{no_pesanan}', [PesananPelangganController::class, 'lihatPesanan'])->name('pesanan-pelanggan.lihat-pesanan');
    Route::get('pesanan-pelanggan/terima-pesanan/{no_pesanan}', [PesananPelangganController::class, 'terimaPesanan'])->name('pesanan-pelanggan.terima-pesanan');
    Route::post('pesanan-pelanggan/alokasi_teknisi/{no_pesanan}', [PesananPelangganController::class, 'alokasiTeknisi'])->name('pesanan-pelanggan.alokasi_teknisi');
    Route::post('pesanan-pelanggan/kerjakan_teknisi/{no_pesanan}', [PesananPelangganController::class, 'kerjakanTeknisi'])->name('pesanan-pelanggan.kerjakan_teknisi');
    Route::post('pesanan-pelanggan/tolak-pesanan/{no_pesanan}', [PesananPelangganController::class, 'tolakPesanan'])->name('pesanan-pelanggan.tolak-pesanan');

    Route::get('pelanggan', [PelangganController::class, 'index'])->name('pelanggan.index');

    Route::get('profile-karyawan', [ProfileController::class, 'karyawan'])->name('profile-karyawan.show');
    Route::post('profile-karyawan/change-password', [ProfileController::class, 'ubahPassword'])->name('profile-karyawan.change-password');

    Route::get('laporan-teknisi', [LaporanTeknisiController::class, 'index'])->name('laporan-teknisi.index');
    Route::get('laporan-teknisi/show/{no_pesanan}', [LaporanTeknisiController::class, 'show'])->name('laporan-teknisi.show');
    Route::get('laporan-teknisi/buat-laporan/{no_pesanan}', [LaporanTeknisiController::class, 'buat_laporan'])->name('laporan-teknisi.buat-laporan');
    Route::post('laporan-teknisi/store', [LaporanTeknisiController::class, 'store'])->name('laporan-teknisi.store');
});
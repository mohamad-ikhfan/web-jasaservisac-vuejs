<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pesanan_pelanggans', function (Blueprint $table) {
            $table->id();
            $table->string('no_pesanan')->unique();
            $table->string('nik_penerima')->nullable();
            $table->string('jadwal_pengerjaan')->nullable();
            $table->dateTime('tanggal_selesai')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pesanan_pelanggans');
    }
};
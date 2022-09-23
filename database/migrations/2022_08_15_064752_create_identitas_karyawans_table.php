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
        Schema::create('identitas_karyawans', function (Blueprint $table) {
            $table->id();
            $table->string('nomor_identitas')->unique();
            $table->string('nama_lengkap');
            $table->string('tempat_lahir');
            $table->string('tanggal_lahir');
            $table->string('jenis_kelamin');
            $table->string('rt_rw');
            $table->string('kelurahan');
            $table->string('kecamatan');
            $table->string('kota');
            $table->string('agama');
            $table->string('status_perkawinan');
            $table->string('pekerjaan');
            $table->string('kewarganegaraan');
            $table->string('path_foto_ktp')->nullable();
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
        Schema::dropIfExists('identitas_karyawans');
    }
};
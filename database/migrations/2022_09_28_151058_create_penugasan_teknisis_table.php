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
        Schema::create('penugasan_teknisis', function (Blueprint $table) {
            $table->id();
            $table->string('no_pesanan');
            $table->string('nik_pemberi_tugas');
            $table->string('nik_penerima_tugas');
            $table->string('tanggal_tugas');
            $table->string('status_tugas');
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
        Schema::dropIfExists('penugasan_teknisis');
    }
};
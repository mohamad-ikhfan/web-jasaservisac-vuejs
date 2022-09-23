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
        Schema::create('pesan_jasas', function (Blueprint $table) {
            $table->id();
            $table->string('no_pesanan');
            $table->integer('id_pelanggan');
            $table->integer('id_kategori');
            $table->integer('id_layanan');
            $table->string('unit');
            $table->string('keluhan');
            $table->string('id_properti');
            $table->string('id_alamat');
            $table->string('tanggal_booking');
            $table->double('total_tagihan');
            $table->string('status_pesanan');
            $table->enum('status_pembayaran', ['menunggu pembayaran', 'lunas'])->nullable();
            $table->dateTime('selesai')->nullable();
            $table->enum('metode_pembayaran', ['cod', 'transfer'])->nullable();
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
        Schema::dropIfExists('pesan_jasas');
    }
};
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
        Schema::create('alamat_pelanggans', function (Blueprint $table) {
            $table->id();
            $table->integer('id_pelanggan');
            $table->string('label');
            $table->string('atas_nama');
            $table->string('no_hp');
            $table->string('alamat_lengkap');
            $table->string('patokan');
            $table->enum('utama', ['y', 'n']);
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
        Schema::dropIfExists('alamat_pelanggans');
    }
};
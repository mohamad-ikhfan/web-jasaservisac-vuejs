<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LaporanTeknisi extends Model
{
    use HasFactory;
    protected $guarded = [];

    protected $casts = [
        'teknisi' => 'array',
        'sparepart' => 'array',
    ];
}
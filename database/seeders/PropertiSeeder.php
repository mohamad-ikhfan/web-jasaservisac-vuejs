<?php

namespace Database\Seeders;

use App\Models\Properti;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PropertiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'properti' => 'Rumah',
                'biaya_properti' => 0
            ],
            [
                'properti' => 'Apartemen',
                'biaya_properti' => 40000
            ],
            [
                'properti' => 'Ruko',
                'biaya_properti' => 0
            ],
            [
                'properti' => 'Kantor',
                'biaya_properti' => 40000
            ],
        ];

        return Properti::insert($data);
    }
}
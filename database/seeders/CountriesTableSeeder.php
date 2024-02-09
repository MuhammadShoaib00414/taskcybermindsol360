<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CountriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $countries = [
            ['name' => 'United States'],
            ['name' => 'Canada'],
            ['name' => 'United Kingdom'],
            ['name' => 'Australia'],
            ['name' => 'Germany'],
            ['name' => 'France'],
            ['name' => 'Japan'],
            ['name' => 'China'],
            ['name' => 'India'],
            ['name' => 'Brazil'],
            ['name' => 'South Africa'],
            ['name' => 'Mexico'],
            ['name' => 'Italy'],
            ['name' => 'Spain'],
            ['name' => 'Netherlands'],
            ['name' => 'Switzerland'],
            ['name' => 'Sweden'],
            ['name' => 'Norway'],
            ['name' => 'Denmark'],
            ['name' => 'Russia'],
            ['name' => 'Argentina'],
            ['name' => 'New Zealand'],
            ['name' => 'Singapore'],
            ['name' => 'South Korea'],
            ['name' => 'Malaysia'],
            ['name' => 'Thailand'],
            ['name' => 'Egypt'],
            ['name' => 'Nigeria'],
            ['name' => 'Kenya'],
            // Add more countries as needed
        ];

        DB::table('countries')->insert($countries);
    }
}

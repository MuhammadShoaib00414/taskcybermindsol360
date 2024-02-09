<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;
// use Barryvdh\Snappy\Facades\SnappyPdf as PDF;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('migration-run', function () {
    try {
        Artisan::call('migrate');
        return 'Migrations have been run successfully!';
    } catch (\Exception $e) {
        return 'Error running migrations: ' . $e->getMessage();
    }
});


Route::get('/home', [UserController::class,'index']);
Route::get('register-form', [AuthController::class,'loginform']);





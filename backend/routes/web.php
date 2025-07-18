<?php

use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CourseController;

Route::prefix('auth')->group(function () {
    Route::post('login', [AuthController::class, 'login']);
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/courses', [CourseController::class, 'index']);
    Route::get('/courses/{id}', [CourseController::class, 'show']);
    Route::post('/courses/{id}/enroll', [CourseController::class, 'enroll']);
    Route::get('/my-courses', [CourseController::class, 'myCourses']);
    Route::get('/user', [UserController::class, 'user']);
});



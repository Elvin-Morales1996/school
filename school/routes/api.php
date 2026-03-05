<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\SchoolsController;
use App\Http\Controllers\AlumnoController;
use App\Http\Controllers\PadresController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use App\Models\User;

use Illuminate\Support\Facades\Hash;


Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('schools', SchoolsController::class);
    Route::apiResource('alumnos', AlumnoController::class);
    Route::apiResource('padres', PadresController::class);
    Route::apiResource('users', UserController::class);
});

Route::post('/login', function (Request $request) {

    $user = User::where('email', $request->email)->first();

    if (!$user || !Hash::check($request->password, $user->password)) {
        return response()->json(['message' => 'Credenciales incorrectas'], 401);
    }

    $token = $user->createToken('api-token')->plainTextToken;

    return response()->json([
        'user' => $user,
        'token' => $token
    ]);
});
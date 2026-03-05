<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\padres_alumnos;
use Illuminate\Http\Request;

class PadresAlumnosController extends Controller
{
    //
    public function index()
    {
        return padres_alumnos::all();
    }

    public function store(Request $request)
    {
        return padres_alumnos::create($request->all());
    }

    public function destroy($id)
    {
        padres_alumnos::destroy($id);
        return response()->json(['message' => 'Relación eliminada']);
    }
}

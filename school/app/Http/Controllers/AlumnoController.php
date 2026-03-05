<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Alumno;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class AlumnoController extends Controller
{
public function index()
    {
        return alumno::with(['school','padres'])->get();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'full_name' => 'required',
            'address' => 'required',
            'email' => 'required|email|unique:alumnos',
            'gender' => 'required',
            'school_id' => 'required|exists:schools,id'
        ]);

        $alumno = alumno::create($data);

        // Asociar padres si vienen
        if ($request->padres) {
            foreach ($request->padres as $padre) {
                $alumno->padres()->attach($padre['id'], [
                    'parentesco' => $padre['parentesco']
                ]);
            }
        }

        return $alumno->load('padres');
    }

    public function show($id)
    {
        return alumno::with(['school','padres'])->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $alumno = alumno::findOrFail($id);
        $alumno->update($request->all());
        return $alumno;
    }

    public function destroy($id)
    {
        alumno::destroy($id);
        return response()->json(['message' => 'Alumno eliminado']);
    }
}

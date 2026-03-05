<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\padres;
use Illuminate\Http\Request;


class PadresController extends Controller
{
    //
    public function index()
    {
        return padres::with('alumnos')->get();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'address' => 'required'
        ]);

        return padres::create($data);
    }

    public function show($id)
    {
        return padres::with('alumnos')->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $padre = padres::findOrFail($id);
        $padre->update($request->all());
        return $padre;
    }

    public function destroy($id)
    {
        padres::destroy($id);
        return response()->json(['message' => 'Padre eliminado']);
    }
}

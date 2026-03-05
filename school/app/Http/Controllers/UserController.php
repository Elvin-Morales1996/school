<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\schools;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //
     public function index()
    {
        $user = Auth::user();

        if ($user->type === 'Administrador') {
            return schools::with('user')->get();
        }

        return schools::where('user_id', $user->id)->get();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'address' => 'required',
            'email' => 'required|email|unique:schools',
            'latitude' => 'nullable',
            'longitude' => 'nullable'
        ]);

        $data['user_id'] = Auth::id();

        return schools::create($data);
    }

    public function show($id)
    {
        return schools::with('alumnos')->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $school = schools::findOrFail($id);
        $school->update($request->all());
        return $school;
    }

    public function destroy($id)
    {
        schools::destroy($id);
        return response()->json(['message' => 'Escuela eliminada']);
    }
}

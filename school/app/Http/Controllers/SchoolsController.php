<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use \App\Models\Schools;

class SchoolsController extends Controller
{

public function index()
{
    return response()->json(
        Schools::paginate(5)
    );
}


}

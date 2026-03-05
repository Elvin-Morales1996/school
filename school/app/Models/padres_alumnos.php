<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class padres_alumnos extends Model
{
    //
     use HasFactory;

    protected $table = 'padres_alumnos';

    protected $fillable = [
        'padre_id',
        'alumno_id',
        'parentesco'
    ];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class padres extends Model
{
    //
     use HasFactory;

    protected $fillable = [
        'name',
        'address',
        'phone'
    ];

    // Relación muchos a muchos con alumnos
    public function alumnos()
    {
        return $this->belongsToMany(
            alumno::class,
            'padres_alumnos',
            'padre_id',
            'alumno_id'
        )->withPivot('parentesco');
    }

}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class alumno extends Model
{
    //
    use HasFactory;

    protected $fillable = [
        'full_name',
        'address',
        'phone',
        'email',
        'photo',
        'gender',
        'latitude',
        'longitude',
        'school_id'
    ];

    // Relación: alumno pertenece a una escuela
    public function school()
    {
        return $this->belongsTo(Schools::class);
    }

    // Relación muchos a muchos con padres
    public function padres()
    {
        return $this->belongsToMany(
            Padres::class,
            'padres_alumnos',
            'alumno_id',
            'padre_id'
        )->withPivot('parentesco');
    }
}

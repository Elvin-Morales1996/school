<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class schools extends Model
{
    //
    use HasFactory;

    protected $fillable = [
        'name',
        'address',
        'email',
        'photo',
        'latitude',
        'longitude',
        'user_id'
    ];

    // Relación: una escuela pertenece a un usuario
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Relación: una escuela tiene muchos alumnos
    public function alumnos()
    {
        return $this->hasMany(Alumno::class);
    }
}

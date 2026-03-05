<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        /*    id_alumno INT AUTO_INCREMENT PRIMARY KEY,
    nombre_completo VARCHAR(150),
    direccion VARCHAR(255),
    telefono VARCHAR(20),
    email VARCHAR(150),
    foto VARCHAR(255),
    genero VARCHAR(20),
    latitud DECIMAL(10,8),
    longitud DECIMAL(11,8),
    id_grado INT,
    id_seccion INT,
    id_school INT,
    FOREIGN KEY (id_school) REFERENCES schools(id_school) */
        Schema::create('alumnos', function (Blueprint $table) {
            $table->id();
            $table->string('full_name', 150);
            $table->string('address', 255);
            $table->string('phone', 20)->nullable();
            $table->string('email', 150)->unique();
            $table->string('photo', 255)->nullable();
            $table->string('gender', 20);
            $table->decimal('latitude', 10, 8)->nullable();
            $table->decimal('longitude', 11, 8)->nullable();
            $table->unsignedBigInteger('school_id');
            $table->foreign('school_id')->references('id')->on('schools')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('alumnos');
    }
};

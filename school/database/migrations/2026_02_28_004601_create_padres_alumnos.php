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
        /*padres_alumnos */
        Schema::create('padres_alumnos', function (Blueprint $table) {
$table->id();
$table->unsignedBigInteger('padre_id');
$table->unsignedBigInteger('alumno_id');
$table->string('parentesco', 50);

$table->foreign('padre_id')
      ->references('id')
      ->on('padres')
      ->onDelete('cascade');

$table->foreign('alumno_id')
      ->references('id')
      ->on('alumnos')
      ->onDelete('cascade');

$table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('padres_alumnos');
    }
};

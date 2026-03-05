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
    {/*    id_padre INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150),
    direccion VARCHAR(255),
    telefono VARCHAR(20) */
        Schema::create('padres', function (Blueprint $table) {
            $table->id();
            $table->string('name', 150);
            $table->string('address', 255);
            $table->string('phone', 20)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('padres');
    }
};

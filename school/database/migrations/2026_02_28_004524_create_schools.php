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
        /*    id_school INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150),
    direccion VARCHAR(255),
    email VARCHAR(150),
    foto VARCHAR(255),
    latitud DECIMAL(10,8),
    longitud DECIMAL(11,8),
    id_user INT,
    FOREIGN KEY (id_user) REFERENCES usuarios(id_user)*/
        Schema::create('schools', function (Blueprint $table) {
            $table->id();
            $table->string('name', 150);
            $table->string('address', 255);
            $table->string('email', 150)->unique();
            $table->string('photo', 255)->nullable();
            $table->decimal('latitude', 10, 8)->nullable();
            $table->decimal('longitude', 11, 8)->nullable();
            $table->unsignedBigInteger('user_id');
$table->foreign('user_id')
      ->references('id')
      ->on('users')
      ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('schools');
    }
};

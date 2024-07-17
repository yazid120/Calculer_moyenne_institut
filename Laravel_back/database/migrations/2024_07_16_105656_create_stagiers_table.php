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
        Schema::create('stagiers', function (Blueprint $table) {
        $table->id();
        $table->string('nom', 100);
        $table->string('prenom', 100);
        $table->string('email', 100)->unique();
        $table->string('telephone', 15);
        $table->string('wilaya', 55);
        $table->text('adresse');
        $table->date('date_birth');
        $table->integer('age');
        $table->enum('sex', ['male', 'female']);
        $table->string('password');
        $table->string('cred_file_id');
        $table->boolean('logical_delete')->default(false);
        $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stagiers');
    }
};

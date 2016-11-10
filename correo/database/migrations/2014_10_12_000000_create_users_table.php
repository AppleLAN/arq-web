<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('usrUsername')->unique();
            $table->string('usrName');
            $table->string('usrLastname');
            $table->string('usrEmail')->unique();
            $table->string('usrPassword');
            $table->date('usrBirthday');
            $table->rememberToken();
            $table->timestamps();
            $table->integer('city_id')->unsigned();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}

<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddFKDestinatario extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('destinatario', function ($table) {
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('typesRefered_id')->references('id')->on('typesRefered');
            $table->foreign('message_id')->references('id')->on('messages');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('destinatario', function (Blueprint $table) {
            $table->dropForeign('destinatario_message_id_foreign');
            $table->dropForeign('destinatario_typesRefered_id_foreign');
            $table->dropForeign('destinatario_user_id_foreign');
        });
    }
}

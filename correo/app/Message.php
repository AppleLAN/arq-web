<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Folder;
use App\User;
use App\Destinatario;


class Message extends Model
{
    public function folders (){
    	return $this->belongsToMany('App\Folder');
    }

    public function users(){
    	return $this->belongsToMany('App\User');
    }

    public function destinatarios(){
    	return $this->hasMany('App\Destinatario');
    }
}

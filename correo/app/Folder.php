<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Message;

class Folder extends Model
{
    public function user(){
    	return $this->belongsTo('App\User');
    }

    public function messages (){
    	return $this->belongsToMany('App\Message');
    }
}

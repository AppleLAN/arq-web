<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Destinatario;



class TypeReferedTo extends Model
{
    public function destinatarios(){
    	return $this->hasMany('App\Destinatario');
    }

}

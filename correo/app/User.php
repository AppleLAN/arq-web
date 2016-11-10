<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use App\City;
use App\Message;
use App\Destinatario;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'usrName','usrLastname', 'email', 'password', 'usrUsername',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function city() {
        return $this->belongsTo('App\City');
    }

    public function messages() {
        return $this->belongsToMany('App\Message');
    }

    public function destinatario(){
        return $this->hasOne('App\Destinatario');
    }
}

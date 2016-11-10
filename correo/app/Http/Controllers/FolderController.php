<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class FolderController extends Controller
{
    /**
     * Devuelve todas las carpetas relacionadas con el usuario loggeado
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user_id = Auth::user()->id;

        $folders = Folder::where('user_id',$user_id);
        if($folders){
            return response()->json(["Status" => "Ok", "data" => $folders], 200);
        }else{
            return response()->json(["Status" => "Not content"], 204);
        }
    }

    /**
     * Creacion de nueva carpeta para el usuario loggeado
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $user_id = Auth::user()->id;


        $folder = new Folder();
        $folder->folderName = $request->folderName;
        $poll->user_id = $user_id;

        if($folder->save()){
            return response()->json(["Status" => "Carpeta creada"], 200);
        }else{
            return response()->json(["Status" => "Error el crear la carpeta"], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        
    }
}

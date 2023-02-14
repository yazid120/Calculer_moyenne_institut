<?php
require_once '../functions.php';
require_once '../db_connection.php'; 

$Post_data = file_get_contents('php://input'); 
$request = json_decode($Post_data); 

// echo $Post_data;
if(isset($Post_data)){
    $Nom = $request->nom; 
    $Prenom = $request->prenom; 
    $Num_Stagier = $request->num_stagier; 

    if(_empty_stat_input($Nom,$Prenom,$Num_Stagier) !== false){
        echo 'Empty input Status';
        exit(); 
    }
    if(incorrect_stagier_num($Num_Stagier) !== false){
        echo 'Incorrect stagier numbre';
        exit(); 
    }
    
}else{
    //error
}

?>
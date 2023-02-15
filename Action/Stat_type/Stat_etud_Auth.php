<?php
if(session_status() == 1){
    session_start(); 
}
require_once '../functions.php';
require_once '../db_connection.php'; 

$Post_data = file_get_contents('php://input'); 
$request = json_decode($Post_data); 

// echo $Post_data;
if(isset($Post_data)){

    function Validate_data($data){
        $data_return = trim($data); 
        $data_return = stripslashes($data); 
        $data_return = htmlspecialchars($data); 
     return $data_return; 
    }
    

    $Nom = $request->nom; 
    $Prenom = $request->prenom; 
    $Num_Stagier = $request->num_stagier; 

    if(_empty_stat_input($Nom,$Prenom,$Num_Stagier) !== false){
        echo 'Empty input Status'.session_status();
        exit(); 
    }
    if(incorrect_stagier_num($Num_Stagier) !== false){
        echo 'Incorrect stagier numbre';
        exit(); 
    }
    if(StrNum_Contain_char($Num_Stagier) !== false){
        echo 'Section numbre must cotain only numbers'; 
        exit(); 
    }
    
}else{
    //error
}

?>
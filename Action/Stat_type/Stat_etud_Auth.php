<?php
if(session_status() == 1){
    session_start(); 
}
require_once '../functions.php';
require_once '../db_Class_conn.php';

$Obj_Db = new DbConnect; 
$conn = $Obj_Db->connect(); 


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
    

    $Nom_ref = $request->nom; 
    $Prenom_ref = $request->prenom; 
    $Num_Stagier = $request->num_stagier; 
    $ref_id = $request-> id; 

    $Nom = Validate_data($Nom_ref); 
    $Prenom = Validate_data($Prenom_ref); 
    
    
    if(_empty_stat_input($Nom,$Prenom,$Num_Stagier) !== false){
        echo 'Empty input Status';
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
    if(Creat_Student_User($Nom,$Prenom,$Num_Stagier,$ref_id,$conn) === false){
        echo 'Submition Failed'; 
        exit(); 
    }else{
        echo 'successful student submition'; 
        exit(); 
    }
    
}else{
    //error
}

?>
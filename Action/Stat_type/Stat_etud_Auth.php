<?php
require_once '../functions.php';
require_once '../db_connection.php'; 

$Post_data = file_get_contents('php://input'); 
$request = json_decode($Post_data); 

echo $Post_data;
if(isset($Post_data)){
    $Nom = $request->nom; 
    $Prenom = $request->prenom; 
    $Num_Sect = $request->num_stagier; 

    
}else{
    //error
}

?>
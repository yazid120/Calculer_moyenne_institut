<?php 
require_once '../functions.php';
require_once '../db_connection.php'; 

echo'prof status';

$Post_data = file_get_contents('php://input'); 
$request = json_decode($Post_data); 

if(isset($Post_data)){
    function Validate_data($data){
        $data_return = trim($data); 
        $data_return = stripslashes($data); 
        $data_return = htmlspecialchars($data); 
     return $data_return; 
    }
    $Nom_bef = $request -> nom;
    $prenom_bef = $request -> prenom; 
    
    
    $Nom = Validate_data($Nom_bef); 
    $Prenom = Validate_data($prenom_bef); 
    
    if(empty_loginInputs($Nom,$Prenom) !== false){
        echo 'empty status inputs'; 
        exit(); 
    }
    if(StrNum_Contain_char($Num_Stagier) !== false){
        echo 'Section numbre must cotain only numbers'; 
        exit(); 
    }
}


?>
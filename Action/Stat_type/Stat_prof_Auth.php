<?php 
if(session_status() == 1){
    session_start(); 
}
require_once '../functions.php';
require_once '../db_Class_conn.php';

$Obj_Db = new DbConnect; 
$conn = $Obj_Db->connect(); 


// if(isset($_GET['status'])){
//     if($_GET['status'] == 'Professeur'){
//       $role = 'Professeur'; 
//     }else{
//         $role = 'none'; 
//     } 
// }else{ //echo 'null reponse';
// }

 
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
    $ref_id = $request-> id;
    
    $Nom = Validate_data($Nom_bef); 
    $Prenom = Validate_data($prenom_bef); 
     

    if(empty_loginInputs($Nom,$Prenom)){
        echo 'empty status inputs';
    //   array_push($error,'empty status inputs');  
      exit(); 
    }

     
    if(CreateUser_Prof($Nom,$Prenom,$ref_id,$conn) === false){
        echo 'Submition Failed'; 
        exit(); 
    }else{
        echo 'successful Teacher submition'; 
        exit(); 
    }
    
}


?>
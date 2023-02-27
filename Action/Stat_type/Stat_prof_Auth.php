<?php 
if(session_status() == 1){
    session_start(); 
}
require_once '../functions.php';
require_once '../db_Class_conn.php';

$Obj_Db = new DbConnect; 
$conn = $Obj_Db->connect(); 


if(isset($_GET['status'])){
    if($_GET['status'] == 'Professeur'){
      $role = 'Professeur'; 
    }else{
        $role = 'none'; 
    } 
}else{ //echo 'null reponse';
}

 
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
    
    $error = array(); 

    if(empty_loginInputs($Nom,$Prenom) !== false){
      array_push($error,'empty status inputs');  
      exit(); 
    }

    $Status = $request->Status; 
    $email_ref = $request-> email; 

    // Creat a request to subtract the id of the user
    $sql = "SELECT `id` FROM `users` WHERE users.usersemail = :email_ref";
    
    $stmt = $conn->prepare($sql);
    $s = $stmt->bindParam(':email_ref', $email_ref, PDO::PARAM_STR);
    $stmt->execute(); 
    $ref_id = $stmt->fetch(PDO::FETCH_ASSOC);
    $ref_id = $ref_id['id']; 

    if(CreateUser_Prof($Nom,$Prenom,$ref_id,$Status,$conn) === false){
        echo 'Submition Failed'; 
        exit(); 
    }else{
        echo 'successful student submition'; 
        exit(); 
    }
    
}


?>
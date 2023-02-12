<?php 
require_once './functions.php';
require_once './db_connection.php'; 

 
// Get Post Status 
$Post_Data = file_get_contents('php://input'); 
$request = json_decode($Post_Data); 
// var_dump($request); 


if(isset($Post_Data)){
    $user_status = $request->status; 

    if(No_Status_choised($user_status) !== false){
        echo 'No Status was choised'; 
    }
    // echo $user_status; 

}else{
    //Error OF Access 
}

?>
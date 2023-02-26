<?php 
require_once './db_connection.php'; 

$Post_data = file_get_contents('php://input'); 
$request = json_decode($Post_data); 
if(isset($Post_data)){
    $current_user_Auth = $request -> email; 
     
    $sql = "SELECT * FROM `Admin`"; 
    $result = mysqli_query($connection,$sql); 
    while($row = mysqli_fetch_assoc($result))
     if(count($row) == 0)
       echo 'empty Admin table'; 
     else
      $Admin = $row['Admin_mail']; 
      
    //   $returned_result = $Admin == $current_user_Auth;
    if($Admin == $current_user_Auth ){ 
        echo 'Valid admin user'.$returned_result; 
    }else{
        echo 'inValid admin'; 
    }

}


?>
<?php
 require_once './db_connection.php'; 
 require_once './functions.php';
/*header("Access-Control-Allow-Origin:*"); 
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); 
header("Access-Control-Allow-Headers:*"); */

$postData = file_get_contents("php://input"); 
$request = json_decode($postData); 
//  var_dump($request);
if(isset($postData)){
   $User_Name = $request->name; 
   $User_email= $request->email;
   $User_password= $request->password; 
   $User_repassword= $request->ConfirmPassword;
   $date = time(); 
  //Hashing the Password 
  $hashed_pwd = password_hash($User_password, PASSWORD_DEFAULT);
  
   if(emptyInputSignUp($User_Name,$User_email,$User_password,$User_repassword)){
    echo 'empty inputs fields'; 
   } 

$sql = "INSERT INTO `users` (usersName,usersemail,userspassword) 
   VALUES('$User_Name','$User_email','$hashed_pwd')";
   $response = $connection->query($sql); 
   if($response){
    $respose = "successful";
    echo $response;
   }else{
    $error = "failed"; 
    echo $error;
  }
}else{ 
     // http_response_code(404);
}

?>
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
    exit(); 
   } 
   if(invalidUserName($User_Name)!==false){
      echo 'Invalid User Name'; 
      exit();
   }
   if(unmatched_Password($User_password,$User_repassword) !== false){
      echo 'password does not match';
      exit(); 
   }
   if(inputInfos_exist($connection,$User_email,$User_Name) !== false){
      echo 'User already exist !!'; 
      exit();
   }
   echo Create_user($connection,$User_Name,$User_email,$User_password);


}else{ 
     // http_response_code(404);
}

?>
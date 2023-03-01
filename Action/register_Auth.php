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
   $User_role = $request->user_role; 
   $date = time(); 
  //Hashing the Password 
  $hashed_pwd = password_hash($User_password, PASSWORD_DEFAULT);

  $error = array(); 

   if(emptyInputSignUp($User_Name,$User_email,$User_password,$User_repassword)){
     array_push($error,'empty inputs fields'); 
     echo json_encode($error);
    exit(); 
   } 
   if(invalidUserName($User_Name)!==false){
       array_push($error,'Invalid User Name'); 
       echo json_encode($error); 
      exit();
   }
   if(unmatched_Password($User_password,$User_repassword) !== false){
      array_push($error,'password does not match');
      echo json_encode($error);
      exit(); 
   }
   if(inputInfos_exist($connection,$User_email,$User_Name) !== false){
      array_push($error,'User already exist !!'); 
      echo json_encode($error);
      exit();
   }
   if(empty($User_role)){
      array_push($error,'Your forgot to add your status'); 
      echo json_encode($error);
      exit(); 
   }
   
   if(count($error) == 0)
   echo Create_user($connection,$User_Name,$User_email,$User_password,$User_role);


}else{ 
     // http_response_code(404);
}

?>
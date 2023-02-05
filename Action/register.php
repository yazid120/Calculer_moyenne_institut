<?php
require_once './db_connection.php'; 
/*header("Access-Control-Allow-Origin: http://localhost:3000/register"); 
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); 
header("Access-Control-Allow-Headers: Content-Type, Authorization"); */

$postData = file_get_contents("php://input"); 
echo $postData;
if(isset($postData) && !empty($postData)){
   $request = json_decode($postData);  
 
//***** inputs infos (json format decoded) ****/
   $User_Name = $request->name; 
   $User_email= $request->email;
   $User_password= $request->password; 
   $User_repassword= $request->ConfirmPassword;
   $date = 
   
//registration sql request
 $sql = "INSERT INTO `users` (usersName,usersemail,userspassword) 
    VALUES('$User_Name','$User_email','$User_password')";
    if(mysqli_query($connection,$sql)){
        echo 'Submition successful!!'; 
        $_SESSION['User_name'] = $User_Name; 
        $_SESSION['User_email'] = $User_email; 
        $_SESSION['User_password'] = $User_password; 
        $_SESSION["time_out_users"] = time();
    }else{
        echo 'Error:Submition failed'; 
        exit();
    }

}else{
    // http_response_code(404);
    $error = 'Your Submition has failed'; 
    header('location:http://localhost:3000/register?error='.$error); 
}


?>
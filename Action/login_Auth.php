<?php
 require_once './db_connection.php'; 
 require_once './functions.php'; 
// echo 'login authentification'; 
 $postData = file_get_contents("php://input"); 
 $request = json_decode($postData); 
//  var_dump($request) ; 
if(isset($postData)){
    $User_email = $request->email; 
    $User_Password = $request->password;
    $User_Name = $request->Name;
    $user_paset = 10; 
    
    $_POST['UserName'] = $User_Name; 
    $_POST['UserEmail'] = $User_email; 
    $_POST['UserPassword'] = $User_Password; 
     

    if(empty_loginInputs($User_email,$User_Password)){
       echo 'empty inputs'; 
       exit(); 
    }
    if(invalid_userName($connection,$User_email,$User_Name) !== false){
       echo 'User Name dont match'; 
       exit(); 
    }
    
    echo Login_user($connection,$User_email,$User_Password); 
        
     
}else{
    //respose error
}
?>
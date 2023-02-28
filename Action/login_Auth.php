<?php
 require_once './db_connection.php'; 
 require_once './functions.php'; 

// 'login authentification'; 
 $postData = file_get_contents("php://input"); 
 $request = json_decode($postData); 

if(isset($postData)){
    $User_email = $request->email; 
    $User_Password = $request->password;
    $User_Name = $request->Name;
    
    $error = array();
    $success = array();

    if(empty_loginInputs($User_email,$User_Password)){
      array_push($error,'empty inputs'); 
      echo json_encode($error);
       exit(); 
    }
    if(invalid_userName($connection,$User_email,$User_Name) !== false){
       array_push($error,'User Name dont match'); 
       echo json_encode($error);
       exit(); 
    }
    if(invalid_Email($connection,$User_email,$User_Name) !==false){
        array_push($error,'unexistent email address'); 
        echo json_encode($error); 
        exit();
    }
    

    
    if(Login_user($connection,$User_email,$User_Password) == false){
      array_push($error,'wrong pwd'); 
       echo json_encode($error); 
       exit(); 
    }else{
        echo Login_user($connection,$User_email,$User_Password); 
        exit();
    }

        
     
}else{
    //respose error
}
?>
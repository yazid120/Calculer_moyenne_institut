<?php
 require_once './db_connection.php'; 
 require_once './functions.php'; 
// echo 'login authentification'; 
if(isset($_GET['Success'])){
    if(isset($_GET['Success']) == 'Registration_sucessful'){
        echo 'Registration_sucessful'; 
    }
}
 $postData = file_get_contents("php://input"); 
 $request = json_decode($postData); 
//  var_dump($request) ; 
if(isset($postData)){
    $User_email = $request->email; 
    $User_Password = $request->password;
    $User_Name = $request->Name;  

    if(empty_loginInputs($User_email,$User_Password)){
       echo 'empty inputs'; 
    }
    if(inputInfos_exist($connection,$User_Name,$User_email)){
       echo 'ivalid infos'; 
    }
    /*echo '</br>';
    echo $User_email.'</br>'; 
    echo $User_Password.'</br>';*/
}else{
    //respose error
}
?>
<?php 

// ==================== Sign up / login System (Funtions) ============ //

function emptyInputSignUp($userName,$userEmail,$userPassword,$userRepassword){
    $return_result = false; 
  if(empty($userName) || empty($userEmail) || empty($userPassword) || 
  empty($userRepassword)){
    // One or All of the SignUp inputs are empty
    $return_result = true; 
  }else{
    $return_result = false; 
  }
  return $return_result; 
}

function invalidUserName($userName){
    $reutrn_result = false; 
    if(!preg_match("/^[a-zA-Z0-9]*$/",$userName)){
        $return_result = true; 
    }else{
        $return_result = false; 
    }
    return $return_result; 
}
function invalidEmailAdd($userEmail){
    $return_result = false; 
    if(!filter_var($userEmail,FILTER_VALIDATE_EMAIL)){
        $return_result = true; 
    }else{
        $return_result = false;
    }
    return $return_result; 
}

function creat_user($connection,$User_Name,$User_email,$userPassword){
    $hashed_pwd = password_hash($userPassword, PASSWORD_DEFAULT); 
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

}

function empty_loginInputs($user_Email,$userPassword){
    $return_result = false; 
    if(empty($user_Email) || empty($userPassword)){
        $return_result = true; 
    }else{
        $return_result = false; 
    }
    return $return_result; 
}
function inputInfos_exist($connection,$userEmail){
    $sql ="SELECT * FROM `users` WHERE usersName = ? OR usersEmail = ?"; 
    $stmt = mysqli_stmt_init($connection); 
    if(!mysqli_stmt_prepare($stmt,$sql)){
        return 'Technical error !!';  
    }
    mysqli_stmt_bind_param($stmt,'ss',$userEmail,$userEmail);
    mysqli_stmt_execute($stmt); 
    $data_result = mysqli_stmt_get_result($stmt); 
    if($row = mysqli_fetch_assoc($data_result)){
        return $row; 
    }else{
        $return_result = false; 
        return $return_result; 
    }
    mysqli_stmt_close($connection); 
}

function Login_user($connection,$user_Email,$userPassword){
    $return_result = false; 
    $input_infos_existsResult = inputInfos_exist($connection,$user_Email,$user_Email); 
    if($input_infos_existsResult === false){
        return 'error: user infos missing wrong user';  
    }
    $hashed_pwd = $input_infos_existsResult['userspassword']; 
    $currnt_pwd_hashed = password_hash($userPassword, PASSWORD_DEFAULT);
    $check_usr_pwd = password_verify($currnt_pwd_hashed,$hashed_pwd); 
    if($check_usr_pwd === false){
        // return 'incorrect password !!'; 
        $return_result =false; 
        return $hashed_pwd;
    }else{
        // return 'User login successfuly'; 
        $return_result = true; 
    }
    return $return_result; 
}

?>
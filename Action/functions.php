<?php 

// ==================== Sign up / login System (Funtions) ============ //

function emptyInputSignUp($userName,$userEmail,$userPassword,$userRepassword){
    $reutrn_result = false; 
  if(empty($userName) || empty($userEmail) || empty($userPassword) || 
  empty($userRepassword)){
    // One or All of the SignUp inputs are empty
    $return_result = true; 
    exit(); 
  }else{
    $return_result = false; 
  }
  return $reutrn_result; 
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

function empty_loginInputs($user_Email,$userPassword){
    $return_result = false; 
    if(empty($user_email) || empty($userPassword)){
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
        exit(); 
    }
    mysqli_stmt_bind_param($stmt,'s',$userEmail);
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
    $input_infos_existsResult = inputinfosexist($connection,$user_Email,$user_Email); 
    if($input_infos_existsResult === false){
        return 'error: user infos missing wrong user'; 
        exit(); 
    }
    $hashed_pwd = $input_infos_existsResult['userspassword']; 
    $check_usr_pwd = password_verify($userPassword,$hashed_pwd); 
    if($check_usr_pwd === false){
        return 'incorrect password !!'; 
        exit();
    }else{
        return 'User login successfuly'; 
        exit(); 
    }
}

?>
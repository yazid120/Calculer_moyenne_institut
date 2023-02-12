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
    $return_result = false; 
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

function unmatched_Password($userPassword,$userRepassword){
    $return_result = false; 
    if($userPassword !== $userRepassword){
        $return_result = true; 
    }else{
        $return_result = false; 
    }
    return $return_result; 
}

function Create_user($connection,$User_Name,$User_email,$userPassword){
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
    $sql ="SELECT * FROM `users` WHERE usersName = ? OR usersEmail = ?;"; 
    $stmt = mysqli_stmt_init($connection); 
    if(!mysqli_stmt_prepare($stmt,$sql)){
        return 'Technical error !!';  
        exit(); 
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

function invalid_userName($connection,$user_Email,$User_Name){
    $return_result = false; 
    // $sql ="SELECT * FROM users WHERE users.usersemail == $user_Email";
    $input_infos_existsResult = inputInfos_exist($connection,$User_Name,$User_Name);
    if($input_infos_existsResult === false){
        return 'Connection infos problem';
    }
    $Db_user = $input_infos_existsResult['usersName']; 
    if($User_Name !== $Db_user){
        $return_result = true;  
    }else{
       $return_result = false; 
    }
    return $return_result; 
}

function Login_user($connection,$user_Email,$userPassword){  
    $return_result = false; 
    $input_infos_existsResult = inputInfos_exist($connection,$user_Email,$user_Email); 

    if($input_infos_existsResult === false){
        return 'error: user infos missing wrong user';   
    }
    $hashed_pwd = $input_infos_existsResult['userspassword']; 
    
    $check_usr_pwd = password_verify($userPassword,$hashed_pwd); 
    if($check_usr_pwd === false){
        // return 'incorrect password !!'; 
        $return_result = false; 
    }
    else if($check_usr_pwd === true){
        // return 'User login successfuly';
        // session_start(); 
        $_SESSION['User_email'] = $input_infos_existsResult['usersemail'];
        $_SESSION['User_Name'] = $input_infos_existsResult['usersName']; 
        $_SESSION['User_Password'] = $input_infos_existsResult['userspassword']; 
        $return_result = true; 
    }
    return $return_result; 
}
//return profile infos
function Profile_infos($User_Name,$user_Email){
    return $User_Name.''.$user_Email; 
}


// Status profile functions
function No_Status_choised($user_stat){
    $return_result = false; 
    if($user_stat == null){
        $return_result = true; 
    }else{
        $return_result = false; 
    }
    return $return_result; 
}

function Affect_Status($user_stat){
    $A_Choice_status = ''; 
    if($user_stat == 'Etudiant'){
        $A_Choice_status = 'Affecter au stagier';
    }else if($user_stat == 'Professeur'){
        $A_Choice_status ='Affecter au prof'; 
    }else{
        $A_Choice_status = null; 
    }
    return $A_Choice_status; 
}
?>
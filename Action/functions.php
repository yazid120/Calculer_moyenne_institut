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
function inputInfos_exist($connection,$userEmail,$userName){
    $sql ="SELECT * FROM `users` WHERE usersName = ? OR usersEmail = ?;"; 
    $stmt = mysqli_stmt_init($connection); 
    if(!mysqli_stmt_prepare($stmt,$sql)){
        return 'Technical error !!';  
        exit(); 
    }
    mysqli_stmt_bind_param($stmt,'ss',$userName,$userEmail);
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
        if(!isset($_SESSION)) 
    { 
        session_start();
        $_SESSION['User_email'] = $input_infos_existsResult['usersemail'];
        $_SESSION['User_Name'] = $input_infos_existsResult['usersName']; 
        $_SESSION['User_Password'] = $input_infos_existsResult['userspassword']; 
        $_SESSION['Date_user'] = $input_infos_existsResult['Date_user']; 
        $_SESSION['id'] = $input_infos_existsResult['id']; 
    }  
         
        $return_result = true; 
    }
    return $return_result; 
}


function Store_user_Session($connection,$user_Email,$userPassword,$session_infos){
    $return_result = false;
    $session_infos = [];  
    $input_infos_existsResult = inputInfos_exist($connection,$user_Email,$user_Email); 

    if($input_infos_existsResult === false){
        return 'technical error'; 
    }

    if(Login_user($connection,$user_Email,$userPassword) !== false){

        if(!isset($_SESSION)) {
        session_start();
        $_SESSION['usersemail'] = $input_infos_existsResult['usersemail'];
        $_SESSION['usersName'] = $input_infos_existsResult['usersName']; 
        $_SESSION['userspassword'] = $input_infos_existsResult['userspassword']; 
       } 

        $session_infos[] = $_SESSION; 
    }
    return $session_infos; 

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

//********   tate Status/etudiant type Functions  *********/
function _empty_stat_input($nom,$prenom,$num_stagier){
    $return_result = false; 
    if(empty($nom) || empty($prenom) || empty($num_stagier)){
        $return_result = true; 
    }else{
        $return_result = false; 
    }
    return $return_result; 
}
function incorrect_stagier_num($num_stagier){
    $return_result = false; 
    if(preg_match('/[A-Za-z]/',$num_stagier) == true ){
        $return_result = true; 
    }else{
        $return_result = false; 
    }
    return $return_result; 
}
function StrNum_Contain_char($num_stagier){
    $return_result = false; 
    if(is_numeric($num_stagier) == false){
        $return_result = true; 
    }else $return_result =false; 
    return $return_result; 
}

function Creat_Student_User($Nom,$Prenom,$Num_inscrp,$r_id,$connection){
    $return_result = false; 
    $sql = "INSERT INTO etudiant (user_id,Nom,Prenom,Num_inscr) 
    VALUES('$r_id','$Nom','$Prenom','$Num_inscrp')";
    $response = mysqli_query($connection,$sql); 
    if($response){
        $return_result = true; 
        // echo 'successful student submition'; 
    }else{
        $return_result = false; 
        // echo 'Submition Failed';
    }
    return $return_result; 
}

?>
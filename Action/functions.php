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

function Create_user($connection,$User_Name,$User_email,$userPassword,$date_inscr,$User_role){
    
    if($User_role == 'Stagier'){
      $role_id = 2;
    }
    if($User_role == 'Professeur'){
        $role_id = 3; 
    }
    $hashed_pwd = password_hash($userPassword, PASSWORD_DEFAULT); 
$sql = "INSERT INTO `users` (usersName,usersemail,userspassword,Date_user,role_id) 
    VALUES('$User_Name','$User_email','$hashed_pwd','$date_inscr','$role_id')";
    $response = $connection->query($sql); 

    if($response){
        $last_id = mysqli_insert_id($connection); 
        return json_encode([['id'=>$last_id]]);
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

function invalid_Email($connection,$userEmail,$User_Name){
    $return_result = false;
    $input_infos_existsResult = inputInfos_exist($connection,$userEmail,$userEmail);
    if($input_infos_existsResult === false){
        return 'Connection infos problem';
    }
    $local_Email = $input_infos_existsResult['usersemail']; 
    if($userEmail !== $local_Email){
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
        return 'error: invalid email or password';   
    }
    $hashed_pwd = $input_infos_existsResult['userspassword']; 
    $ref_id = $input_infos_existsResult['id']; 
    $ref_email = $input_infos_existsResult['usersemail'];
    
    $check_usr_pwd = password_verify($userPassword,$hashed_pwd); 
    if($check_usr_pwd === false){
        // return 'incorrect password !!'; 
        $return_result = false; 
    }
    else if($check_usr_pwd === true){
        // return 'User login successfuly';
        $return_result = true; 
        return json_encode([['id' =>$ref_id]]); 
    }
    
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


function CreateUser_Student($Nom,$Prenom,$Num_inscrp,$r_id,$connection){
$return_result = false; 
 
    try{
        // SQL request for 'Student'
    $sql = "INSERT INTO etudiant (id,user_id,Nom,Prenom,Num_inscr) 
    VALUES(null,'$r_id','$Nom','$Prenom','$Num_inscrp')";
    $connection->setAttribute(PDO::ATTR_ERRMODE , PDO::ERRMODE_EXCEPTION);
    $connection -> exec($sql);  
    }
    catch(PDOException $e){
      echo $e->getMessage(); 
    }
    $connection = null; 
}


function CreateUser_Prof($Nom,$Prenom,$r_id,$connection){

    try{
        // SQL request for 'teacher'
        $sql = "INSERT INTO professeur (id,Prof_id,Nom,Prenom)
      VALUES(null,'$r_id','$Nom','$Prenom')";
    $connection->setAttribute(PDO::ATTR_ERRMODE , PDO::ERRMODE_EXCEPTION);
    $connection -> exec($sql); 
    // $connection -> close(); 

    }catch(PDOException $e){
        echo $e ->getMessage();
    }
    $connection = null; 
}


// role getting/verification functions

function get_role_user($connection,$id_user){
$sql ="SELECT role_id from users WHERE users.id = :id_user"; 
    $stmt = $connection -> prepare($sql); 
    $stmt -> bindParam(':id_user',$id_user, PDO::PARAM_STR); 
    if($stmt -> execute()){
      $role = $stmt -> fetch(PDO::FETCH_ASSOC); 
    }
    
return $role; 
}

function check_role_user($connection,$user_Email){
  $user_role_id = get_role_user($connection,$user_Email); 
  if(!is_numeric($user_role_id) || $user_role_id == 0){
    return 'Error: role note valid'; 
  }else{
    return $user_role_id; 
  }
}



// Section management /prof status access
function get_sections($id_user, $nom_section, $specialty_section, $connection){
    $sql = "SELECT * FROM `section` WHERE section.sec_id = ':id_user'";
    $stmt = $connection -> prepare($sql); 
    $stmt -> bindValue(':id_user',$id_user); 
}
function Section_not_found($id_user, $nom_section,$connection){
  $return_result = false; 
  $sql = "SELECT * FROM `section` WHERE section.sec_name = :nom_sec AND
  section.sec_id = :id_user";

  $stmt = $connection -> prepare($sql); 
  $stmt -> bindValue(':nom_sec', $nom_section);
  $stmt -> bindValue(':id_user',$id_user); 
  $stmt -> execute(); 
  
  $section = $stmt -> fetchAll(PDO::FETCH_ASSOC);
  $section_nb = count($section); 

  if($section_nb <= 0)
  $return_result = true;  

  else
   $return_result = false; 

  return $return_result; 
}
    


?>
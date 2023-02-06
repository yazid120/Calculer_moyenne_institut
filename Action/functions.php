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

?>
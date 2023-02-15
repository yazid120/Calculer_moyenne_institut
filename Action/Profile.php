<?php 
session_start();
require_once './functions.php';
require_once './db_connection.php'; 
// require_once './login_Auth.php'; 
$session_status = session_status(); 
 

echo $_SESSION['User_email']; 

/* function GET_user_subDate($connection,$user_email){
    $sql = "SELECT * FROM users WHERE users.usersemail = $user_email"; 
    $user_date = mysqli_query($connection,$sql); 
 return $user_date; }
*/
// echo GET_user_subDate($connection,$user_email); 
// echo json_decode($_SESSION['User_email']);




?>
<?php 
// session_start();
require_once './functions.php';
$session_status = session_status(); 
 
    
// echo json_decode($_SESSION['User_email']);
if(!isset($_SESSION)) {
    session_start();
    var_dump($_SESSION); 
}



?>
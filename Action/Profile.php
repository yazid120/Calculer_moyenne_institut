<?php 
$session_stat = session_status(); 
if($session_stat == 1)
session_start(); 

require_once './functions.php';
require_once './db_connection.php'; 

$method = $_SERVER['REQUEST_METHOD']; 

switch($method){
  case'GET':
    $sql = 'SELECT * FROM users'; 
    $result = mysqli_query($connection,$sql); 
    while($rows = mysqli_fetch_assoc($result)){
        $users = json_encode($rows); 
        echo json_encode($rows); 
        // echo $users; 
    }
    /*$stmt = $connection->prepare($sql); 
    $stmt-> execute(); 
    $users = $stmt-> fetch(); 
    json_encode($users); */
   
    break; 
}
 

// echo $_SESSION['Date_user']; 





?>
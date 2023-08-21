<?php
require_once __DIR__.'/Admin.php';
require_once __DIR__.'/../db_Class_conn.php';

$Db = new DbConnect(); 
$db_connection = $Db->connect(); 

$admin = new Admin($db_connection);

$inputs_data = file_get_contents('php://input'); 
$request = json_decode($inputs_data); 

if($_SERVER["REQUEST_METHOD"] == "POST"){
    
    $id = null;
    $name = $request->name; 
    $email = $request->email; 
    $password = $request->password; 
    $repassword = $request->repassword;

    $admin_signup = $admin->signup($id,$name,$email,$password,$repassword);
    echo $admin_signup;
}


?>
<?php
require_once __DIR__.'/../db_Class_conn.php';
require_once __DIR__.'/Admin.php';

$DB = new DbConnect(); 
$db_connection = $DB->connect(); 

$admin= new Admin($db_connection); 

$inputs_data= file_get_contents('php://input'); 
$request = json_decode($inputs_data);

if($_SERVER['REQUEST_METHOD'] == 'POST'){
$email= $request->email; 
$password = $request->password; 

$login_admin = $admin->login($email,$password);

echo $login_admin;
}
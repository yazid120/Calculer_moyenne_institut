<?PHP 
require_once '../db_Class_conn.php'; 
require_once '../Config/config.php'; 
require_once '../functions.php'; 

$Post_data = file_get_contents('PHP://input'); 
$request = json_decode($Post_data); 
$id = $request -> id;
if(get_role_user($conn, $id) == 3){
    //     echo 'prof valid'; 
     }
echo json_encode(get_role_user($conn, $id));







?>
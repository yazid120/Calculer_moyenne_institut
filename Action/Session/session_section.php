<?PHP 
require_once '../db_Class_conn.php'; 
require_once '../Config/config.php'; 
require_once '../functions.php'; 

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  header('Access-Control-Allow-Origin: http://localhost:3000');
  header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
  header('Access-Control-Allow-Headers: token, Content-Type');

  die();
} 
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$db_Object = new DbConnect; 
$connection = $db_Object-> connect(); 
$Post_data = file_get_contents('PHP://input'); 
$request = json_decode($Post_data); 

$error = array(); 
/* USER ID */
$id = $request ->user_id;

$role_EXTRACTION_OBJECT = get_role_user($connection, $id);
$user_ROLE = $role_EXTRACTION_OBJECT['role_id'];
if(isset($Post_data)){
  if($user_ROLE == 3){
    $sql = "SELECT `sec_name`,`num_max_stag`,`sec_speciality` FROM `section`
     WHERE section.sec_id = :user_id"; 
    $stmt = $connection -> prepare($sql); 
    $stmt -> bindValue(':user_id', $id);
    
    if($stmt -> execute()){
        $section = $stmt -> fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($section); 
    }else{
       array_push($error,'nombre de section creat = 0');
       echo json_encode($error); 
    }
 }else{
   array_push($error,'user not allowed to access this section'); 
 }

}






?>
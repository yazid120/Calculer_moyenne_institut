<?PHP 
include '../db_Class_conn.php'; 
require_once '../Config/config.php'; 
require_once '../functions.php';

// if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
//     header('Access-Control-Allow-Origin: http://localhost:3000');
//     header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
//     header('Access-Control-Allow-Headers: token, Content-Type');
 
//     die();
// } 
//  header('Access-Control-Allow-Origin: *');
//  header('Content-Type: application/json');

$objDb = new DbConnect;
$conn = $objDb->connect();


$id_data = file_get_contents('php://input'); 
$request = json_decode($id_data); 
$method = REQUEST_METHOD;


switch($method){

  case'POST': 
  $sql = "SELECT `usersName`,`usersemail`,`Date_user`,`role_name` FROM `users`,`role`
  WHERE users.role_id = role.role_id AND users.id = :id"; 

    if(isset($id_data)){
     $id = $request->id;
     $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $id);
    }
    if($stmt->execute()){
        $data = ['Status' => 1,'record'=>'Successful execution'];
        $users = $stmt->fetch(PDO::FETCH_ASSOC);
        
    }else{
        $data = ['Status' => 0,'record'=>'Failed execution']; 
    }
     $conn = null; 

    echo json_encode($users);
    
    
    
    
}


?>
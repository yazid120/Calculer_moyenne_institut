<?PHP 
require_once '../db_connection.php';


$id_data = file_get_contents('php://input'); 
$request = json_decode($id_data); 

if(isset($request)){
    $id = $request->id; 
    $sql = "SELECT * FROM users WHERE users.id = $id"; 
    $result = mysqli_query($connection,$sql); 
    while($row = mysqli_fetch_assoc($result)){
     $rest = json_encode($row);
    }
    var_dump($rest);
}



?>
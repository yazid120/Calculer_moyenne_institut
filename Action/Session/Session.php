<?PHP 
require_once '../db_connection.php';


$id_data = file_get_contents('php://input'); 
$request = json_decode($id_data); 

if(isset($request)){
    $email = $request->email; 
    $sql = "SELECT `usersName`,`usersEmail`,`Date_user` FROM users WHERE usersemail='$email'"; 
    $result = mysqli_query($connection,$sql);  
    while($row = mysqli_fetch_assoc($result)){
     $rest = $row;
    }
    echo json_encode($rest);
}



?>
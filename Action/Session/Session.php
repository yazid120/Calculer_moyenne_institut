<?PHP 
include '../db_Class_conn.php'; 

$objDb = new DbConnect;
$conn = $objDb->connect();


$id_data = file_get_contents('php://input'); 
$request = json_decode($id_data); 

if(isset($id_data)){
    $email = $request->email; 
    $user_status = $request->user_stat;

    
    // $result = mysqli_query($connection,$sql);  
    $path = explode('/', $_SERVER['REQUEST_URI']);
    print_r($path[4]); 

    if(isset($path[4]) && is_numeric($path[4])) {
        $sql = "SELECT `usersName`,`usersEmail`,`Date_user` FROM users WHERE usersemail='$email'"; 
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $path[3]);
        $stmt->execute();
        $users = $stmt->fetch(PDO::FETCH_ASSOC);
    }

    echo json_encode($users);

}else{
    echo 'invalid access !!'; 
}



?>
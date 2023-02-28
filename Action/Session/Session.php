<?PHP 
include '../db_Class_conn.php'; 
require_once '../Config/config.php'; 

$objDb = new DbConnect;
$conn = $objDb->connect();


$id_data = file_get_contents('php://input'); 
$request = json_decode($id_data); 
$method = REQUEST_METHOD;


switch($method){

  case'POST': 
  $sql = "SELECT * FROM `users`,`etudiant`,`professeur`
   WHERE etudiant.user_id  OR professeur.Prof_id = :id"; 

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

    $etudiant = array();
    $professeur = array();  
    echo json_encode($users);
//   if($users['Status'] == 'Professeur'){
//     array_push($professeur,$users['Nom'],$users['Prenom'],$users['usersemail'],
//     $users['Date_user'],$users['Status']);
//     echo json_encode($professeur); 
//    }
//    if($users['Status'] == 'Etudiant'){
//     array_push($professeur,$users['Nom'],$users['Prenom'],$users['usersemail'],
//     $users['Date_user'],$users['Num_inscr'],$users['Status']);
//     echo json_encode($etudiant); 
//    }
    
    
    
    
}


?>
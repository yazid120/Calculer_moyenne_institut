<?PHP 
require_once './Config/config.php'; 
require_once './functions.php';
require_once './db_Class_conn.php'; 

$DB_Object = new DbConnect();
$connection = $DB_Object->connect(); 

$Post_data = file_get_contents('php://input'); 
$request = json_decode($Post_data); 
$Request_Method = REQUEST_METHOD;

switch($Request_Method){
  case'POST':
    if(isset($Post_data)){
    $id= null; 
    $name_sec = $request -> name_sec; 
    $id_sec = $request -> id_sec; 
    $num_max_st = $request -> num_max_st; 
    $spe_sec = $request -> $spe_sec;

    $sql = "INSERT INTO `section` VALUES(:id,:id_sec,:name_sec,:num_max_st,:spe_sec)";
      $stmt = $connection -> prepare($sql); 
      $stmt -> bindParam(':id',$id); 
      $stmt -> bindParam(':name_sec',$name_sec,PDO::PARAM_STR);
      $stmt -> bindParam(':id_sec',$id_sec);
      $stmt -> bindParam(':num_max_st',$num_max_st,PDO::PARAM_INT);
      $stmt -> bindParam('spe_sec',$spe_sec,PDO::PARAM_STR); 
    }
    
    case'UPDATE':
        $sql = "UPDATE `section` SET name_sec,num_max_st,spe_sec";
}



?>
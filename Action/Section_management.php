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
      $error = array();
      
      function Validate_data($data){
        $data_return = trim($data); 
        $data_return = stripslashes($data); 
        $data_return = htmlspecialchars($data); 
     return $data_return; 
    }

    $id= null; 
    $name_sec_test = $request -> nom_sec;  
    $num_max_st = $request -> nom_max_stag; 
    $spe_sec_test = $request -> spec_sec;

    $name_sec = Validate_data($name_sec_test); 
    $spe_sec = Validate_data($spe_sec_test); 

    
    if(_empty_stat_input($name_sec,$num_max_st,$spe_sec) !== false){
       array_push($error,'Empty Section identifiers'); 
       echo json_encode($error); 
       exit();
    }

    try{
    $sql = "INSERT INTO section (id, sec_name ,num_max_stag ,sec_speciality)
     VALUES('$id','$name_sec','$num_max_st','$spe_sec')";

      $stmt = $connection -> prepare($sql); 
      $connection->setAttribute(PDO::ATTR_ERRMODE , PDO::ERRMODE_EXCEPTION);
      $connection -> exec($sql);  

      echo json_encode(['Section created Successfuly']);
    }catch(PDOException $e){
      echo $e->getMessage();  
    }
    $connection = null;
      
    }
    
    case'UPDATE':
        $sql = "UPDATE `section` SET name_sec,num_max_st,spe_sec";
}



?>
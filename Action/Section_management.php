<?PHP 
require_once './Config/config.php'; 
require_once './functions.php';
require_once './db_Class_conn.php'; 

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  header('Access-Control-Allow-Origin: http://localhost:3000');
  header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
  header('Access-Control-Allow-Headers: token, Content-Type');

  die();
} 
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$DB_Object = new DbConnect();
$connection = $DB_Object->connect(); 

$Post_data = file_get_contents('php://input'); 
$request = json_decode($Post_data); 
$Request_Method = REQUEST_METHOD;



switch($Request_Method){
  /* Create new Section */
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
    $Sec_id = $request -> id; 
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
$sql = "INSERT INTO section (sec_id, sec_name ,num_max_stag ,sec_speciality)
     VALUES('$Sec_id','$name_sec','$num_max_st','$spe_sec')";

      $stmt = $connection -> prepare($sql); 
      $connection->setAttribute(PDO::ATTR_ERRMODE , PDO::ERRMODE_EXCEPTION);
      $connection -> exec($sql);  

      echo json_encode(['Section created Successfuly']);
    }catch(PDOException $e){
      echo $e->getMessage();  
    }
    $connection = null;
    exit();
    }


  /* Delete section */
    case'DELETE':
      if(isset($Post_data)){
      $error = array();

      $section_name = $request -> nom_sec;
      $section_specialty = $request -> spec_sec;

      if(empty_loginInputs($section_name,$section_specialty) !== false){
        array_push($error,'empty infos'); 
        echo json_encode($error); 
        exit(); 
      }


      $user_id = $request -> id; 
      try{

      $sql_delete = "DELETE FROM `section` WHERE section.sec_name = '$section_name' 
      AND section.sec_id = '$user_id'";
      $stmt = $connection -> prepare($sql_delete); 
      $connection->setAttribute(PDO::ATTR_ERRMODE , PDO::ERRMODE_EXCEPTION);
      $result = $connection -> exec($sql_delete); 

      if($result){
        echo json_encode(['Section Deleted Successfuly']);
      }else{
        echo json_encode(['Unfound Section']);
      }
      
    }catch(Exception $e){
      echo $e -> getMessage(); 
    }
    $connection = null; 
    exit();

    }


    /* Update Section */
    case'PUT':
      if(isset($Post_data)){
        $error = array();

        $id = $request -> data -> id; 
        $nom_sec = $request -> data -> nom_sec; 
        $spe_sec = $request -> data -> spec_sec; 

        if(empty_loginInputs($nom_sec,$spe_sec) !== false){
          array_push($error,'empty infos'); 
          echo json_encode($error); 
          exit(); 
        }
        
        if(Section_not_found($id,$nom_sec,$connection) !== false){
          array_push($error,'Section non exitent'); 
          echo json_encode($error); 
          exit(); 
        }
        
        try{
          $sql_upadte = "UPDATE `section` SET name_sec WHERE
           users.id = section_id ";
           $stmt = $connection -> prepare($sql_upadte); 
           $connection -> setAttribute(PDO::ATTR_ERRMODE , PDO::ERRMODE_EXCEPTION);
        }catch(Exception $e){
          echo $e -> getMessage();
        }
        $connection = null; 
        exit(); 

      }

      case'GET':
        $error = array();
        $sql_get ="SELECT * FROM `etudiant`";
      
      $stmt = $connection -> prepare($sql_get); 
      $result = $stmt -> execute();
      if($result){
        $stagier = $stmt -> fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($stagier); 
      }else{
        array_push($error,'Error: rechercher de stagier echouer'); 
        echo json_encode($error); 
      }
      $connection = null; 
      exit();   

         
}



?>
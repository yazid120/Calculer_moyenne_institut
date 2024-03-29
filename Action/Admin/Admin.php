<?php 
class Admin{
    private $db; 
    public $row;
    
    public function __construct($db_connection)
    {
        $this->db=$db_connection;
    }


    public function signup($id,$name,$email,$password,$repassword){
        try{
            $sql="SELECT * FROM `admin` WHERE admin.Admin_name=:Admin_name AND admin.Admin_mail=:Admin_mail";
            $query= $this->db->prepare($sql); 

            $query->bindParam(":Admin_name",$name); 
            $query->bindParam(":Admin_mail",$email); 

            $result = $query->execute();
            if($result){
             $row = $query->fetch(PDO::FETCH_ASSOC); 
             $result_rowCount = $query->rowCount();  
            }else{ 
               echo json_encode(['error executing request']); 
            }
            // $query = null;
            if($result_rowCount>0){
                echo json_encode(['admin account aleready exists']);
            }else{
                if(!empty($name) || !empty($email) || !empty($password)){
                    if($password == $repassword){
                  $password_hashed = password_hash($password,PASSWORD_DEFAULT);
                      $sql_i = "INSERT INTO `admin`(id,Admin_name,Admin_mail,Admin_password) 
                         VALUES(:id,:Admin_name,:Admin_mail,:Admin_password)";
                    
                      $query = $this->db->prepare($sql_i);
                     
                      $query->bindParam(":id",$id); 
                      $query->bindParam(":Admin_name",$name); 
                      $query->bindParam(":Admin_mail",$email); 
                      $query->bindParam(":Admin_password",$password_hashed); 
    
                     $result_i = $query->execute(); 
                     echo json_encode(["admin account created successfuly"]);
                   }else{
                     echo json_encode(["Password & repassword does not match"]);
                   }
                }else{
                    echo json_encode(["empty inputs !!"]);
                }
            }

        }catch(PDOException $e){
           echo $e->getMessage();
        }
    }

    public function login($email,$password){
        $sql="SELECT * FROM `admin` WHERE admin.Admin_mail=:admin_mail LIMIT 1";
        $query = $this->db->prepare($sql); 

        $query->bindParam(':admin_mail',$email);
        
        $query->execute();
        if($row = $query->fetch(PDO::FETCH_ASSOC)){
            $password_db = $row['Admin_password'];
        }
         
        $RowResultFetch= $query->rowCount(); 
       if($RowResultFetch>0){
        if(password_verify($password,$password_db)){
            @session_start(); 
            $_SESSION['admin_id']= $row['id'];
            echo json_encode(['id'=>$_SESSION['admin_id']]);
        }
        else{
            echo json_encode(['wrong pwd']);
        }
      }else{
        echo json_encode(['invalide email or password']);
      }

    }
    
    public function logout(){
        session_unset(); 
        session_destroy(); 
        json_encode(["admin logout"]); 
        exit();
    }



}
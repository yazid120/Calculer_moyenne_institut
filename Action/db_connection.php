<?php 

//database credentials, runing in an SQL-db
 $server_Name = "localhost";
 $db_UserName = "root";
 $db_Password = "1234"; 
 $db_Name = "Calc_moy_insfp"; 

//Create a database connection 
 $connection = mysqli_connect($server_Name,$db_UserName,$db_Password,
  $db_Name);
//Check the connection
if($connection == false){
    // ERROR Connection
    die("Error: error found !!" . mysqli_connect_error() . "</BR>" ); 
}else{
    // OPEN Connection
 //echo 'Connection open successfuly';
}
?>
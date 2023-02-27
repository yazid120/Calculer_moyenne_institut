<?PHP 
// echo $_SERVER['SERVER_URI'];
foreach($_SERVER as $key => $serv) 
 echo $key .'=>'.' '.$serv.'</br>';

echo '</span>'.'</br>'; 

define('ROOT',$_SERVER['DOCUMENT_ROOT']);
define('SERVER_URI',$_SERVER['REQUEST_URI']); 
define("DIRNAME",explode('/',$_SERVER['PHP_SELF'])[1]);

echo SERVER_URI; 
echo '</br>';
echo ROOT;
echo '</br>';
echo DIRNAME

?>
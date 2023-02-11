<?php
//Logout and destroy session for and REDIRECT_TO_INDEX_PAGE
session_start(); 

session_unset(); 
session_destroy(); 
echo 'session closed'; 

exit(); 


?>
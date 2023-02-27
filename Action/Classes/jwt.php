<?php 

  require_once '../db_Class_conn.php';
  require_once '../Config/config.php';


//Generate Jwt Token
function Generate_jwt_Token($header,$payload,$secret = 'secret'){

     $headers_encoded = base64_encode(json_encode($header)); 

     $payload_encoded = base64_encode(json_encode($payload)); 

     $hashing_algo = 'SHA256';
     $signature = hash_hmac($hashing_algo,"$headers_encoded.$payload_encoded",$secret,false); 
    //  Encode Signature
    $signature_encoded = base64_encode($signature);

    // Jwt Token generation
    $jwt = $headers_encoded.$payload_encoded.$signature_encoded; 
    return $jwt; 
}

function get_Signature($token){
    $token = explode('.',$token); 
    return $token[2]; 
}

function get_Payload($token){

    $token = explode('.',$token); 
    
    $payload_dacode= json_decode(Base64Url_Decode($token[1])); 

    return $payload_dacode; 
}

function Base64Url_Decode( string $Base64Url ): string
{
    return base64_decode(strtr($Base64Url,'-_','+/')); 

}

function Token_jwt_is_Valid(){
    
}
 

$c= Generate_jwt_Token('yazid','2001'); 
echo get_Signature($c); 

?>
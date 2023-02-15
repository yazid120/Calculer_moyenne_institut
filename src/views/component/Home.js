import React from "react";
import { Component } from "react"; 
import Main_Home from "../../main";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home(){
  let [User_Auth, SetAuth] = useState(''); 
    const Navigate = useNavigate(); 

    useEffect( () =>{
        User_Auth = localStorage.getItem('User_email'); 
          SetAuth(User_Auth); 
    },[]); 

    let access_denied = []; 
    access_denied['home_page_acc'] = 'You can not access this page when logged in';
       
  if(User_Auth != null){
    Navigate('/Profile?error='+access_denied['home_page_acc']); 
  }
  else{
  return(
    <>
    <Main_Home />
    </>
  );
}
}
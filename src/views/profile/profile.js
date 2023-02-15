import { render } from "@testing-library/react";
import React from "react"; 
import User_ig from "./head";
import Main_Profile from "./main_Profile";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import '../../style/profile.css'; 
import axios, { Axios } from "axios";
// import login_Object from '../Login'; 


function Profile(){
    let [User_Auth, SetAuth] = useState(''); 
    const Navigate = useNavigate(); 
    // console.log(localStorage.getItem('User_email')); 

    useEffect ( () =>{
      User_Auth = window.localStorage.getItem('User_email'); 
      SetAuth(User_Auth); 
    },
    []); 
    
    
    fetch('https://localhost/Calculer_moyenne_institut/Action/profile.php')
        .then(response =>{
            // console.log(response.data);
   }); 

    let login_Auth =()=>{
    let nav_comp = document.getElementById('identities_component');
    if(nav_comp.style.display == 'flex'){
       nav_comp.style.display ='none'; 
    }};
    // error access in pages
    let status_error = []; 
    status_error['stat_err'] = 'you must be logged in to access this page'; 
    
    // user dont have the Authentication to access /profile page ? redirect to login page
    if(User_Auth == null){
      Navigate('/login?error='+status_error['stat_err']); 
    }
    // Authenction is correct ? user is alowed to access /profile
    else{
    return(
        <>
        <User_ig />
        <Main_Profile />
        </>
    );
}
}
export default Profile; 
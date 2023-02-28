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

    useEffect ( () =>{
      User_Auth = window.localStorage.getItem('UserId'); 
      SetAuth(User_Auth); 
    },
    []); 
    
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

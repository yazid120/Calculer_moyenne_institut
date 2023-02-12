import { render } from "@testing-library/react";
import React from "react"; 
import User_ig from "./head";
import Main_Profile from "./main_Profile";
import '../../style/profile.css'; 
import axios, { Axios } from "axios";
// import login_Object from '../Login'; 


function Profile(){
    let login_Object = JSON.parse(window.localStorage.getItem('user-info'));
    // console.log(login_Object['email'],login_Object['Name']); 
    
    axios.get('https://localhost/Calculer_moyenne_institut/Action/profile.php')
        .then(response =>{
            // console.log(response.data);
   }); 
    let login_Auth =()=>{
    let nav_comp = document.getElementById('identities_component');
    if(nav_comp.style.display == 'flex'){
       nav_comp.style.display ='none'; 
    }};

    return(
        <>
        <User_ig />
        <Main_Profile />
        </>
    );

}
export default Profile; 
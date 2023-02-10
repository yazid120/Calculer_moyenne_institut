import { render } from "@testing-library/react";
import React from "react"; 
import User_ig from "./head";
import Main_Profile from "./main_Profile";
import '../../style/profile.css'; 


function Profile(){

    let login_Auth =()=>{
    let nav_comp = document.getElementById('identities_component');
    if(nav_comp.style.display == 'flex'){
       nav_comp.style.display ='none'; 
    }};
    // login_Auth(); 
    return(
        <>
        <User_ig />
        <Main_Profile />
        
        </>
    );

}
export default Profile; 
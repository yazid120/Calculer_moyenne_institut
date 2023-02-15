import React from "react";
import { Component } from "react";
import { json } from "react-router-dom";

function Main_Profile(){
  let user_email = window.localStorage.getItem('User_email'); 
  let user_Name = window.localStorage.getItem('User_Name'); 
  // console.warn(user); 
  
    return(
        <>
        <div className="dx_box-format">
        <section className="Profile_mainContainer01355">
         <div className="profile_conatainer_BxElement">
           <h2>Your profile information</h2>
         </div>
         <div className="Profile_userInfos01355">
            <p>Nom: <span>{user_Name}</span></p>
            <p>Email: <span>{user_email}</span></p>
            <p>Date d'inscription:<span></span></p>
         </div>
        </section>
        </div>
        </>
    );
}
export default Main_Profile;

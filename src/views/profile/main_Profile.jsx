import React from "react";
import { Component } from "react";
import { json } from "react-router-dom";

function Main_Profile(){
  let user = JSON.parse(localStorage.getItem('user-info')); 
  // console.warn(user); 
  
    return(
        <>
        <div className="dx_box-format">
        <section className="Profile_mainContainer01355">
         <div className="profile_conatainer_BxElement">
           <h2>Your profile information</h2>
         </div>
         <div className="Profile_userInfos01355">
            <p>Nom:<span>{}</span></p>
            <p>Email:<span></span></p>
            <p>Date d'inscription:<span></span></p>
         </div>
        </section>
        </div>
        </>
    );
}
export default Main_Profile;

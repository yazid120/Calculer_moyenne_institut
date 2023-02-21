import React from "react";
import { Component } from "react";
import axios from "axios";


function Main_Profile(){
  let userId = localStorage.getItem('UserId'); 
   let user_infos ={ 
    id: userId
   } 
    console.log(userId);
   axios.post('https://localhost/Calculer_moyenne_institut/Action/Session/Session.php'
   ,user_infos).then(function (response){
     console.log(response.data); 
   });

   
  
  
    return(
        <>
        <div className="dx_box-format">
        <section className="Profile_mainContainer01355">
         <div className="profile_conatainer_BxElement">
           <h2>Your profile information</h2>
         </div>
         <div className="Profile_userInfos01355">
            <p>Nom: <span></span></p>
            <p>Email: <span></span></p>
            <p>Date d'inscription:<span></span></p>
            <p>Status Utulisateur:</p>
         </div>
        </section>
        </div>
        </>
    );
}
export default Main_Profile;

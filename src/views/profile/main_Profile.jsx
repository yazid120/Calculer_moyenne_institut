import React, { useState } from "react";
import { Component } from "react";
import axios from "axios";


function Main_Profile(){
  const [user_profile, SetuserProfile] = useState([]); 

  let userId = localStorage.getItem('UserId'); 
  let userStatus = localStorage.getItem('User_status'); 
  
  let user_infos ={ 
    email : userId,
    user_stat : userStatus
  } 


   axios.post('http://localhost/Calculer_moyenne_institut/Action/Session/Session.php?path=2',
   user_infos).then(function (response){
    let e = response.data;
    
    SetuserProfile(response.data); 
    //  console.log(e); 
     
   });

   
  
  
    return(
        <>
        <div className="dx_box-format">
        <section className="Profile_mainContainer01355">
         <div className="profile_conatainer_BxElement">
           <h2>Your profile information</h2>
         </div>
         <div className="Profile_userInfos01355">
        {  
         Object.keys(user_profile).map((index,key)=>{
          // console.log(Object.keys(user_profile));
          //  console.log(index);
          
        
          <div>
            {/* <p>Nom:{key} <span>{}</span></p>
            <p>Email: <span>{}</span></p>
            <p>Date d'inscription:<span>{}</span></p> */}
          </div>
          })
        }

            <p>Status Utulisateur: <span><b>{userStatus}</b></span></p>
         </div>
        </section>
        </div>
        </>
    );
}
export default Main_Profile;

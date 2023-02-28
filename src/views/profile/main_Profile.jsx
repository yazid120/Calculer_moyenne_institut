import React, { useState ,useEffect } from "react";
import { Component } from "react";
import axios from "axios";


function Main_Profile(){
  const [user_profile, SetuserProfile] = useState([]); 
  let userId = localStorage.getItem('UserId'); 
  
  
  let user_infos ={ 
    id : userId,
  } 
  console.log(user_infos); 

  useEffect(()=>{
   axios.post('http://localhost/Calculer_moyenne_institut/Action/Session/Session.php',
   user_infos).then(function(response){
    let c = response.data;
    console.log(c.Status); 
    SetuserProfile(response.data); 
   });
  },[]); 

    return(
        <>
        <div className="dx_box-format">
        <section className="Profile_mainContainer01355">
         <div className="profile_conatainer_BxElement">
           <h2>Your profile information</h2>
         </div>
         <div className="Profile_userInfos01355">
          {Object.keys(user_profile).map((index,key) =>
          <div key={key}>
              <p>{index} : <span><b>{user_profile[index]}</b></span></p>
              {/* <p>Email: <span></span></p>
              <p>Date d'inscription:<span></span></p>  */}
          </div>
          )
          }
         </div>
        </section>
        </div>
        </>
    );
}
export default Main_Profile;

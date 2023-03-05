import React, { useState ,useEffect } from "react";
import { Component } from "react";
import User_ig from "./Profile_ig";
import axios from "axios";
import Prof_interface from "./component_profile/Prof_profile_component/interface_prof";
import Etudiant_interface from "./component_profile/etud_profile_component/interface_ etud";


function Main_Profile(){
  const [user_profile, SetuserProfile] = useState([]); 
  let userId = localStorage.getItem('UserId'); 
  
  
  let user_infos ={ 
    id : userId,
  }  

  useEffect(()=>{
   axios.post('http://localhost/Calculer_moyenne_institut/Action/Session/Session.php',
   user_infos).then(function(response){
    SetuserProfile(response.data); 
    // console.log(response.data.role_name); 
    localStorage.setItem('UserRole',response.data.role_name);
   });
  },[]); 
  
     let User_Role = localStorage.getItem('UserRole'); 
    return(
        <>
        <div className="dx_box-format">
          <User_ig/>
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
      

     {
      User_Role == 'Professeur' ?
      <Prof_interface/>
       :
      <Etudiant_interface/>
    }
      
      </>
    );
}
export default Main_Profile;

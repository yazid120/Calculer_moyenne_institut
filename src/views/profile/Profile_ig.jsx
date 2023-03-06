import React from "react";
import { Component } from "react";
import profile_ig from'../../images/avatar_1657033344.jpg'; 

function User_ig(){
   return(
     <>
     <div className="Profile_image_user_setts">
        <img className="image_head" src={profile_ig} />
        <button className="edit_btn_profile_picture">Edit</button>
     </div>
     </>
   )
}
export default User_ig ; 
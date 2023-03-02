import React from "react";
import { useState,useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

let Auth = function({ AllowedRole }){
    const Naviagate = useNavigate();
    
    const Location = useContext(); 

    let User_Role = ()=>{
        axios.get('').then(response=>{

        })
    }



}
export default Auth; 
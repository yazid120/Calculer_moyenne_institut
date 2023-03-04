import React from "react";
import{ Routes, Route, Navigate}from 'react-router-dom'; 
import Page_404 from "../404_page";


const PrivateRoute =  (props)=>{
    let logged_Auth = localStorage.getItem('UserId'); 

    logged_Auth ? (
     <Route {...props}/>
    ) : ( 
     <Navigate to="/login" replace={true}/>
    )

}
export default PrivateRoute;
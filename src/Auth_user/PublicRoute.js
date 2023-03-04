import React from "react";
import { Route, Navigate } from "react-router-dom";
import Page_404 from "../404_page";


const PublicRoute = (props) =>{
    let logged_Auth = localStorage.getItem('UserId'); 

    logged_Auth ? ( 
        <Route {...props}/>
    ): 
    ( 
        <Navigate to={{
            pathname : "/Profile"
        }}/>
    )
}
export default PublicRoute; 
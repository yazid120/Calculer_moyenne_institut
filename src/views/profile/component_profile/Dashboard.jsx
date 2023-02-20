import React from "react";
import SideBar from "./SideBar";
import '../../../style/Dashboard.css'; 


let Dashboard = function(){
    return(
    <>
    <div className="Dash_Container">
    <SideBar/>
        <div className="dash_wrapp_content">
            <h1>Dashboard page</h1>
        </div>
    </div>    
        
    </>
    ); 
}
export default Dashboard; 
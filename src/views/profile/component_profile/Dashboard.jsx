import React from "react";
import SideBar from "./SideBar";
import { FcAdvertising, FcFinePrint,FcFlashOn } from "react-icons/fc"; 
import '../../../style/Dashboard.css'; 


let Dashboard = function(){
    return(
    <>
    <div className="Dash_Container">
    <SideBar/>
        <div className="dash_wrapp_content">
            <h1>Dashboard page</h1>
        
         <div className="main_DashBoard_container_elements">


        <div className="block_dual_listed">
            <div className="Valid_usage_platform _Cpr">
                <h2 className="Fon_tier">
                    peroformence <FcFlashOn/>
                </h2>

            </div>

            <div className="annonce_usage_solid _Cpr">
                <h2 className="Fon_tier">
                    announce <FcAdvertising/>
                </h2>
            </div>
        </div>


        <div className="block_dual_listed">
            <div className="nouveaute_usage_publication _Cpr">
                <h2 className="Fon_tier">nouveauté</h2>
            </div>

            <div className="Sortie_date_resultat _Cpr">
                <h2 className="Fon_tier">les dates de sortie des results</h2>

            </div>
        </div>
              
        <div className="block_dual_listed">
            <div className="Profile_user_part _Cpr">
                <h2 className="Fon_tier">Profile</h2>
            </div>
            <div className="complete_spinner_bnner _Cpr">
                <h2 className="Fon_tier">Completer votre profile <FcFinePrint/></h2>
            </div>
        </div>


        </div>
        </div>
    </div>    
        
    </>
    ); 
}
export default Dashboard; 
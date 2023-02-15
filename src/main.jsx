import React, {Component} from 'react'; 
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

let Main_Home = function(){
    
   
    let signup_redirect = () =>{
        window.location.href ='http://localhost:3000/register'; 
    }

        return(
            <div className='sub_HeadCalc_top'>
                <h1 className='Head_titleBan'>Calculez les moyennes Insfp.</h1>
                <h2 className='head_subtitleBen'>
                    <p>Cette application est reserver au etuediant 
                        de l'institus audio visuelle Insfp
                    </p>
                    <p>inscris-toi gratuitement et commence a traker votre 
                        progress.
                    </p>
                </h2>
                <button className='inscription_side_subRedirection'
                onClick={signup_redirect}>
                    Commence..
                </button>
            </div>
        ); 
    }

export default Main_Home; 
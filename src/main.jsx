import React, {Component} from 'react'; 
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'; 
import { FcApprove, FcManager , FcDocument ,  FcOk} from "react-icons/fc"; 


let Main_Home = function(){
    
   
    let signup_redirect = () =>{
        window.location.href ='http://localhost:3000/register'; 
    }

        return(
            <>
            <section className='sub_HeadCalc_top'>
                <h1 className='Head_titleBan'>Calculez les moyennes Insfp.</h1>
                <h2 className='head_subtitleBen'>
                    <p>Cette application est reserver au etuediant 
                        de l'institus audio visuelle Insfp
                    </p>
                    <p>inscris-toi gratuitement et commence a traker votre 
                        progress.
                    </p>
                </h2>
             <div className='instructe_main_pageLinkbtns'>
                <button className='inscription_side_subRedirection t_sign'
                onClick={signup_redirect}>
                    Commence..
                </button>
                <button className='inscription_side_subRedirection'>
                     Contacter nous           
                </button>
             </div>

            </section>
        <section className='propos_bannerWrapp_check'>
            <div className='classe_baseListed_box'>
                <div className='sider_blinktext'>
                <h2>ce que tourne au tour mix insfp</h2>
                <p>
                <strong>mix</strong> et une plateforme qui propose un systeme
                stagiaire - professeur flexible<br></br> pour acceder au 
                infos et modifier les <b>module</b>, <b>note</b> , <b>status</b>
                 d'un stagier<FcOk className='c'/>
                </p>
                    
                  </div>

    <div className='container_wrapp_dier0323556'>
            {/* Nouveau Stagier */}
        <div className='contentPart_selection_side'>
            <h2>Nouveau Stagier<FcApprove className='icon_rect'/></h2>
            <p>
            institut insfp fournit plusieurs type de formation audio visuel au niveau
            etatique <br></br>
            non payent fournit par le Ministère de la Formation et de l'Enseignement 
            Professionnels, la formation professionel est la l'avenir
            </p>

                <Link to="" className='redige_siteframe'>
                    <button className='rcp_btn'>
                        continue
                    </button>
                </Link>
                    </div>
                    {/* Consultater un enseignant */}
                    <div className='contentPart_selection_side'>
                        <h2>Consultater un enseignant<FcManager className='icon_rect'/></h2>
                        <p>
                        vous etes stagiaire et vous souhaitez consulter vos enseignent la partie mix consulation <br></br>
                        et ouvret a tous stagier - enseignant <span>tout en respectent queleque condition provisoire <br></br>fixée</span>
                        </p>
                    <Link to="" className='redige_siteframe'>
                       <button className='rcp_btn'>
                           continue
                        </button>
                    </Link>
                    </div>
                     {/* Accéder à ma moyenne */}
                     <div className='contentPart_selection_side'>
                        <h2>Accéder à ma moyenne<FcDocument className='icon_rect'/></h2>
                        <p>
                        le partager des resultats et des moyennes sera etablie dans des dates 
                         fixes par l'administration<br></br> et les reprensentant de cette institut pour ne 
                         pas ratez quelque soit rester a jour avec la <br></br>platform
                        </p>
                    <Link to="" className='redige_siteframe'>
                       <button className='rcp_btn'>
                           continue
                        </button>
                    </Link>
                     </div>
                </div>

                </div>
            </section>
            </>
        ); 
    }

export default Main_Home; 
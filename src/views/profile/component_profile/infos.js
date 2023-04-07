import React from "react";
import { Component } from "react";
import react_icon from '../../../images/React-icon.svg.png'; 
import php_icon from '../../../images/PHP-logo.svg.png';
import javascript_icon from '../../../images/Unofficial_JavaScript_logo_2.svg.png';
import '../../../style/infos.css';


let Infos = function(){
    return(
        <>
        <div>
            <h1>infos page</h1>
        </div>
        <section className="infos_page_comprom">
            <div>
                <p className="predif_set_head">
                 Mix est une projet basée sur la gestion Stagier/Prof qui traite la gestion de l'institut de l'audio visuel
                    <b> insfp</b> avec une interface pour stagier permetant  
                </p>
            </div>


            <div className="technogies_used_Forproject">
                <h2>Les Technologies utiliser dans ce Projet :</h2>
                <div className="react_part partie_el">
                    <p className="classic_techDescript">
                    React est une bibliothèque JavaScript libre développée par <b>Facebook</b> depuis 2013. 
                    Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, 
                    via la création de composants dépendant d'un état et générant une page HTML à chaque changement d'état.
                    </p>
                    <img className="react_icon icons" src={react_icon}/>
                </div>
                
                <div className="php_part partie_el">
                    <p className="classic_techDescript">
                    PHP: Hypertext Preprocessor, plus connu sous son sigle PHP, est un langage de programmation libre, 
                    principalement utilisé pour produire des pages Web dynamiques via un serveur HTTP, mais pouvant également
                    fonctionner comme n'importe quel langage interprété de façon locale. PHP est un langage impératif orienté
                    objet.
                    </p>
                    <img className="php_icon icons" src={php_icon}/>
                </div>    

                <div className="javascript_part partie_el">
                    <p className="classic_techDescript">
                    JavaScript est un langage de programmation de scripts principalement employé dans les pages web 
                    interactives et à ce titre est une partie essentielle des applications web. Avec les langages HTML et CSS,
                    JavaScript est au cœur des langages utilisés par les développeurs web.
                    </p>
                    <img className="javascript_icon icons" src={javascript_icon}/>
                </div>            
            </div>

        </section>
        </>
    ); 
}
export default Infos; 
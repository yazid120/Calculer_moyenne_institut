import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import {AiOutlineAppstoreAdd} from "react-icons/ai";
import { MdOutlineChangeCircle, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom"; 



let Prof_interface = function(){
    let [section, Set_section] =useState([]);
    let User_id = localStorage.getItem('User_Id');


useEffect(()=>{
    axios.post('http://localhost/Calculer_moyenne_institut/Action/Session/session_section.php',
    User_id).then(function(response){
        console.log(response); 

    })
})


    let Cofiguration_Section_Object=[
        {Config_contain_class:'Config_Section_wrappList'},
        {name:'Créer une nouvelle Section'},
        {name:'Modify ma Section'},
        {name:'Supprimer ma Section'}
    ]
    return( 
    <>
        <div className="Option_nd_FeaturesProfile_prof">
            <div className="Selection_creation_baseAll_global_Section">
                <div className="">
                    <h2>gérer mes rubriques</h2>
                </div>
            <div>
                <ul className={Cofiguration_Section_Object[0].Config_contain_class}>
                        
                        <Link to="/Profile/Section/Create_sec">
                            <li>
                            {Cofiguration_Section_Object[1].name}
                            <AiOutlineAppstoreAdd/>
                            </li>
                        </Link>
                       
                        
                        <Link to='/Profile/Section/Modify_sec'>
                            <li>
                            <b></b>{Cofiguration_Section_Object[2].name}
                            <MdOutlineChangeCircle/>
                            </li>
                        </Link>
                        
                        
                        <Link to='/Profile/Section/Delete_sec'>
                            <li>
                            {Cofiguration_Section_Object[3].name}
                            <MdDelete/>
                            </li>
                        </Link>
                        
                </ul>
            </div>
            </div>
            <div className="Selection_creation_baseAll_global_Section">
                <div>
                    <h2>Mes Sections</h2>
                </div>
                <div className={Cofiguration_Section_Object[0].Config_contain_class}>
                <ul>
                    <li>Section 1</li>
                    <li>Section 2</li>
                    <li>Section 3</li>
                </ul>

            </div>
            </div>
            
        </div>
   </>
    ); 
}
export default Prof_interface; 
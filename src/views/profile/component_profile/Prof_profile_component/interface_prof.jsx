import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import {AiOutlineAppstoreAdd} from "react-icons/ai";
import { MdOutlineChangeCircle, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom"; 
import { CgCloseO } from "react-icons/cg"; 


let Prof_interface = function(){
    let [section, Set_section] =useState([]);
    let [show_S_infos , Set_section_show] = useState([]); 

    let User_id = localStorage.getItem('UserId');

let post_infos ={
    user_id : User_id
}
const get_section = (value)=>{
    axios.post('http://localhost/Calculer_moyenne_institut/Action/Session/session_section.php',
    post_infos).then(function(response){
        // console.log(response.data); 
        Set_section(response.data); 
    })
}
useEffect(()=>{
    get_section();
},[]); 
//console.log(section)


function section_infos_display(){
    let section_infos_wrapp = document.getElementById('wrapp_section_infos');
    section_infos_wrapp.classList.replace('hide','show'); 
}
let Close_infos_section =()=>{
    let section_infos_wrapp = document.getElementById('wrapp_section_infos');
    section_infos_wrapp.classList.replace('show','hide'); 
}


    let Cofiguration_Section_Object=[
        {Config_contain_class:'Config_Section_wrappList'},
        {name:'Créer une nouvelle Section'},
        {name:'Modify ma Section'},
        {name:'Supprimer ma Section'}
    ]
    let section_infos_Object = [
        {section_infos_siec:'Information de Section:'}, 
        {nom_section:'Nom de section:'},
        {num_max_stag: 'nom maximal des stagies:'},
        {spe_sec:'Specialites affecter a cette section:'}

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
        {
        section.map((titre,key)=>
        <ul key={key} className="formul_ul_wrapped_sections_infos">
                <li className="classic_list_formal" onClick={() =>{
                section_infos_display(); }} value={titre.sec_name}
                 onChange={(e)=>e.target.value}>
                    {titre.sec_name}</li>
        </ul>
        )
        }
            </div>
            </div>
            
            {/* section infos */}
            <div className="Section_infos_wrapp_selec hide" id="wrapp_section_infos">
                <div className="section_box_infos_lite"><CgCloseO className="icon_close" onClick={Close_infos_section}/>
                <h2>{section_infos_Object[0].section_infos_siec}</h2>
                <div className="add_stagier_by_sec">
                    <Link to='/Profile/Section/ajouter_stagier'>
                    <button className="add_new_intern_btn">
                        Ajouter nouveau stagier
                    </button>
                    </Link>
                </div>
              
           
        {/* section.filter(index=>index.sec_name.includes('section 02')).map((index,key)=>
                <ul key={key} className="section_infos_major"><p>{key.sec_name} </p>
                 <li>{index.sec_name}</li>
                 <li>{index.num_max_stag}</li>
                 <li>{index.sec_speciality}</li>
                </ul>
                // console.log(key[index])
                ) */}
            
                
               
               </div>
            </div>
    

            
        </div>
   </>
    ); 
}
export default Prof_interface; 
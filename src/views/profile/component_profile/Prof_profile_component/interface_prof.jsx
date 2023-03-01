import React from "react";
import {AiOutlineAppstoreAdd} from "react-icons/ai";
import { MdOutlineChangeCircle, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom"; 


let Prof_interface = function(){
    let Cofiguration_Section_Object=[
        {Config_contain_class:'Config_Section_wrappList'},
        {name:'Creat une nouvelle Section'},
        {name:'Modify ma Section'},
        {name:'Supprimer ma Section'}
    ]
    return( 
    <>
    <h1>interface prof</h1>
        <div className="Option_nd_FeaturesProfile_prof">
            <div className="Selection_creation_baseAll_global_Section">
                <div className="">
                    <h2>Cofiguration</h2>
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
                    <h2>Mes Section</h2>
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
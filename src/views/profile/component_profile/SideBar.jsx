import React, { useState } from "react";
import { NavLink } from "react-router-dom";


import { FaTh , FaBars} from "react-icons/fa";
import { IoSettingsOutline } from 'react-icons/io5';
import { GrBook } from 'react-icons/gr'; 
import { FiInfo } from 'react-icons/fi'; 
import { MdContactMail } from 'react-icons/md';
import { BsJournalBookmark } from 'react-icons/bs'; 

const SideBar = ()=>{
    const [Menu_Open, SetItOpen] = useState();

    let toggle_menu = ()=>{
        SetItOpen(!Menu_Open); 
    }
    const MenuItems =[
        {
            path:'/Profile', 
            name:'My Profile',
            icon: <FaTh/>
        },
        { 
            path:'/Settings', 
            name:'Settings', 
            icon:<IoSettingsOutline/>
        },
        { 
            path:'/Classes', 
            name:'Classes', 
            icon:<BsJournalBookmark/>
        },
        { 
            path:'/Profile/infos', 
            name:'Infos', 
            icon:<FiInfo/>
        },
        {
            path:'/Contact_us',
            name:'Contact', 
            icon:<MdContactMail/>
        }
       
    ]; 

    return(
        <div className="Cotainer_sideBar_Wrapper" 
        style={{width : Menu_Open ? '210px' : '55px'}}>
            <div className="Side_menu_local_Top"
            style={{ height : Menu_Open ? 'auto' : '3.5rem'}}>
                <h1 className="logo_bogi" 
                style={{display : Menu_Open ? 'block' : 'none'}}>Menu</h1>
                <div className="log" onClick={toggle_menu}
                >{<FaBars />}</div>
            </div>
            {
            MenuItems.map((index,key) =>{
                return(
                <NavLink to={index.path} key={key} 
                className='Nav_menu_links' activeclassname='active'> 
                <div className="icon">{index.icon}</div>
                <div className="link_content"
                style={{display : Menu_Open ? 'block' : 'none'}}>{index.name}</div>
                </NavLink>)
            })
            }
        </div>

    );

}
export default SideBar; 
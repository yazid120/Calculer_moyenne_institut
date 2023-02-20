import React from "react";
import { FaTh } from "react-icons/fa";
import { IoSettingsOutline } from 'react-icons/io5';
import { GrBook } from 'react-icons/gr'; 
import { FiInfo } from 'react-icons/fi'; 
import { MdContactMail } from 'react-icons/md';

const SideBar = ()=>{
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
            icon:<GrBook/>
        },
        { 
            path:'/Profile/infos', 
            name:'Infos', 
            icon:<FiInfo/>
        },
        {
            path:'Contact',
            name:'/Contact_us', 
            icon:<MdContactMail/>
        }
       
    ]; 

    return(
        <div className="">
            <h1>Sider Bare</h1>
        </div>

    );

}
export default SideBar; 
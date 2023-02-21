import React, { Component } from "react"; 
// importing end points react-router-dom
import  { Link, useMatch,
     useResolvedPath,
     useNavigate, useHistory
} from 'react-router-dom'; 

export default function NavBar(){
    const Navigate  = useNavigate(); 
    let user = JSON.parse(localStorage.getItem('user-info')); 
    //  console.warn(user.name);

    let Logout = () =>{
        localStorage.clear(); 
        sessionStorage.clear(); 
        Navigate('/'); 
    }

    let component_Object=[
    {name:'login',id:'login_part',class_name:'base_registerOption_sign'},
    {name:'register',id:'register_part',class_name:'base_registerOption_sign'},
    {name:'logout',id:'logout_part',class_name:'base_registerOption_sign'}
        ];
    
     let navigation = useNavigate();
        const Navigate_register = ()=>{ 
            //use Navigate to /register
            navigation('/register'); 
        }
        const Navigate_login = ()=>{
            //use Navigate to /login
            navigation('/login'); 
        }
        return(
            <nav className="Navigation_Bar_automate02654">
                
            <div className="logo_base">
              <a href="/">logo</a>
            </div>
            <div className="Object_mainLinkes_NavBar_container">
             <ul className="justice_navigation_Opt">
                {
                    localStorage.getItem('UserId') ?
                    <>
                    <Link to="/Profile/Dashboard">Dashboard</Link>
                    <Link to="/Profile/infos">infos</Link>
                    <Link to="/Contact_us">Contact</Link>
                    </> 
                    : 
                    <>
                    <Link to="/">Home</Link>
                    <Link to="/Contact_us">Contact</Link>
                    <Link to="/About">about</Link>
                    </>
                }
             </ul>
            </div>
            <div className="registration_baseMain_selectionBtns" id="identities_component">
                {/* Identifier the Navigation bar with localStorage */}
                {
                    localStorage.getItem('UserId') ?
                <>
                <div className="">
                    {/* Logout btn */}
                    <button className="base_registerOption _logout" 
                    id="logout_part" onClick={Logout}
                     >{component_Object[2].name}
                   </button>
                </div>
                </>
                :
                <>
                <div className="">
                  {/* login btn */}
                 <button className="base_registerOption _sign"
                  id="login_part" onClick={Navigate_login}>{component_Object[0].name}
                 </button>
                </div>
        
                <div className="">
                    {/* register btn */}
                <button className="base_registerOption _sign" 
                id="register_part" 
                onClick={Navigate_register}>{component_Object[1].name}
                </button>
                </div>
                </>

                }

            </div>
            </nav>
            );
}

function Custom_redirectLink({to,child, ...propos}){
    const resolvePath = useResolvedPath(to); 
    const isActive = useMatch({ path: resolvePath.pathname, end: true})

    return( 
        <li className={isActive ? "active" : ""}>
            <link to={to} {...propos}>
                {child}
            </link>
        </li>
    )
}


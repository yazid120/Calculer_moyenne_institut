import React, { Component } from "react"; 

class NavigationBar extends Component{
    render(){
        return(
            <nav className="Navigation_Bar_automate02654">
            <div className="logo_base">
              <a href=""
              >logo</a>
            </div>
            <div className="Object_mainLinkes_NavBar_container">
             <ul className="justice_navigation_Opt">
                <li className="Option_parse"><a href=""
                >Home</a></li>
                <li className="Option_parse"><a href=""
                >Courses</a></li>
                <li className="Option_parse"><a href=""
                >Contact</a></li>
                <li className="Option_parse"><a href=""
                >about</a></li>
             </ul>
            </div>
            <div className="registration_baseMain_selectionBtns">
                <div className="">
                    <button className="base_registerOption _log">login</button>
                </div>
                <div>
                <button className="base_registerOption _sign">sign-in</button>
                </div>
            </div>
            </nav>
            );
    }
}

export default NavigationBar; 

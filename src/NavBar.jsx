import React, { Component } from "react"; 

class NavigationBar extends Component{
    render(){
        return(
            <nav class="Navigation_Bar_automate02654">
            <div class="logo_base">
              <p>logo</p>
            </div>
            <div class="Object_mainLinkes_NavBar">
             <ul>
                <li>Home</li>
                <li>Courses</li>
                <li>Contact</li>
                <li>about</li>
             </ul>
            </div>
            <div class="registration_baseMain">
                <div class="">
                    <button>login</button>
                </div>
                <div>
                <button>sign-in</button>
                </div>
            </div>
            </nav>
            );
    }
}

export default NavigationBar; 

import React from "react";
import ReactDOM from "react-dom";
// import {NavigationBar} from "./app"
import NavigationBar from "./NavBar"; 
import Main from "./main";
import Footer from "./footer";
import './style/index.css'



//Render NavigationBar component class exported
ReactDOM.render(<NavigationBar/>, document.getElementById("root"));
//Render Main content component class exported
ReactDOM.render(<Main/>, document.getElementById("main")); 
//Render footer component class exported
ReactDOM.render(<Footer/>, document.getElementById("footer")); 
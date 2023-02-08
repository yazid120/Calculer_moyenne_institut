import React from "react";
// importing components from react-router-dom package
import{ Routes, Route, }from 'react-router-dom'; 
import NavigationBar from './NavBar'; 
import Footer from "./footer";
// Header links
import Home from "./views/component/Home";
import About from "./views/component/about";
import Contact from "./views/component/Contact_us";
// login links 
import Login from "./views/Login"; 
import Register from "./views/Register"; 
//Profile link
import Profile from "./views/profile/profile";


function App(){
   return(
   <>
   <NavigationBar/>
   <div className="container">
    <Routes>
        {/* Home page routing */}
      <Route exact path="/" element={<Home/>}/>
        {/* About page routing */}
      <Route exact path="/About" element={<About/>}/>
        {/* contact page rounting */}
      <Route exact path="/Contact_us" element={<Contact/>}/>

        {/* login page routing */}
      <Route exact path="/Login" element={<Login/>}/>
        {/* Register page routing */}
      <Route exact path="/Register" element={<Register/>}/>

        {/* Profile page routing */}
      <Route exact path="/Profile" 
      element={
      
      <Profile/>
  
      }/>
    </Routes>
    </div>
    <Footer/>
   </>
   ); 
}

export default App; 

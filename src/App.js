import React, { createContext, useReducer } from "react";
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
import Logout from "./views/Logout";
//Profile link
import Profile from "./views/profile/profile";

import { initialState, reducer } from "./reducer/UseReducer";

//User Creat context Api
export const UserContext =createContext();

const Routing = () =>{
  return(
    <Routes>
        {/* Home page routing */}
      <Route exact path="/" element={<Home/>}/>
        {/* About page routing */}
      <Route exact path="/About" element={<About/>}/>
        {/* contact page rounting */}
      <Route exact path="/Contact_us" element={<Contact/>}/>

        {/* login path routing */}
      <Route exact path="/Login" element={<Login/>}/>
        {/* Register path routing */}
      <Route exact path="/Register" element={<Register/>}/>
        {/* Logout path routing */}
      <Route exact path='/Logout' element={<Logout/>} />

        {/* Profile page routing */}
      <Route exact path="/Profile" 
      element={
      
      <Profile/>}/>
    </Routes> 
  );
}

function App(){

  const [state , dispatch] = useReducer(reducer, initialState); 

   return(

   <>
   <UserContext.Provider value={{state, dispatch}}>
   <NavigationBar/>
   <div className="container">
     <Routing />
   </div>

    </UserContext.Provider>
    <Footer/>
   </>
   ); 
}

export default App; 

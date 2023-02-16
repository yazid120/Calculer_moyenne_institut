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
import Admin from "./views/profile/Admin";
import Dashboard from "./views/profile/component_profile/Dashboard";
import Infos from "./views/profile/component_profile/infos";

import Status from "./views/Status/Status";
import Prof_Status from "./views/Status/Redirect_stat/prof_stat";
import Etudiant_stat from "./views/Status/Redirect_stat/etudiant_stat";

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

        {/* Status path routing */}
      <Route exact path='/Status' element={<Status />} />
        {/* Student path routing */}
      <Route exact path='/Status/Etudiant_stat' element={<Etudiant_stat />} />
        {/* Teacher path routing */}
      <Route exact path='/Status/Prof_stat' element={<Prof_Status />} />

        {/* Profile page routing */}
      <Route exact path="/Profile" 
      element={
      <Profile/>}/>
      {/* Profile/Admin page routing */}
      <Route exact path="/Profile/admin" element={<Admin />} />

      {/* Profile/Dashboard page routing */}
      <Route exact path="/Profile/Dashboard" element={<Dashboard/>} />
      {/* Profile/infos page routing */}
      <Route exact path='/Profile/infos' element={<Infos/>} />

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

import React, {Suspense} from "react";
import{ Routes, Route, Navigate }from 'react-router-dom'; 
import { wait } from "@testing-library/user-event/dist/utils";

import PrivateRoute from "../Auth_user/PrivateRoute";
import PublicRoute from "../Auth_user/PublicRoute";

// Logout import
import Logout from "../views/Logout";
//Profile link
import Profile from "../views/profile/profile";
import RessetPwd from "../views/profile/resetPassword"
import Dashboard from "../views/profile/component_profile/Dashboard";
import SideBar from "../views/profile/component_profile/SideBar";
import Infos from "../views/profile/component_profile/infos";

// import Status from "../views/Status/Status";
import Prof_Status from "../views/Status/Redirect_stat/prof_stat";
import Etudiant_stat from "../views/Status/Redirect_stat/etudiant_stat";
// Admin components 
import Admin from "../views/Admin/Index";
import LoginAdmin from "../views/Admin/login_admin";
import SignUpAdmin from "../views/Admin/signUp_admin";
import DashboardAdmin from "../views/Admin/Dashboard";

import { initialState, reducer } from "../reducer/UseReducer";

//Private routes Mange Section (Prof role only)
import Create_section from "../views/profile/component_profile/Prof_profile_component/Section_prof_com/Creat_section_prof";
import Modify_section from "../views/profile/component_profile/Prof_profile_component/Section_prof_com/Modify_section_prof";
import Delete_section from "../views/profile/component_profile/Prof_profile_component/Section_prof_com/Delete_section";
// Ajouter nouveau stagier route (Prof role only)
import Ajouter_Stagier from "../views/profile/component_profile/Prof_profile_component/Ajoute_stagier/Ajouter_stagier";

// Header links With React lazy method
const Home = React.lazy(()=>wait(100).then( ()=> import("../views/component/Home")));
const About = React.lazy(()=> wait(100).then( ()=> import("../views/component/about")));
const Contact = React.lazy(()=> wait(100).then( ()=> import("../views/component/Contact_us")));

// login links With React lazy method
const Login = React.lazy(()=>wait(100).then( ()=> import("../views/Login")));
const Register = React.lazy(()=>wait(100).then( ()=>import("../views/Register"))); 
const ForgotPassword = React.lazy(()=>wait(100).then(()=>import("../views/ForgotPassword")));

const Page_404 = React.lazy(()=>wait(100).then(()=>import("../404_page")));

const Routing = () =>{
    let logged_Auth = localStorage.getItem('UserId'); 
    const logged_admin_Auth = localStorage.getItem('Admin_auth');

    return(
    <Suspense>
      <Routes>
          {/* Home page routing */}
        <Route exact path="/" element={<Home/>}/>
          {/* About page routing */}
        <Route exact path="/About" element={<About/>}/>
          {/* contact page rounting */}
        <Route exact path="/Contact_us" element={<Contact/>}/>
        {/* contact page rounting */}
        <Route exact path="/404" element={<Page_404/>}/>
        
        <Route path="*" element={<Navigate to="/404"/>}/>

  
          {/* login path routing */}
        <Route exact path="/Login" element=
        {logged_Auth ? <Navigate to={{pathname : "/Profile"}}/> : <Login/>}/>
          {/* Register path routing */}
        <Route exact path="/Register" element=
        {logged_Auth ? <Navigate to={{pathname : "/Profile"}}/> : <Register/>}/>
          {/* Logout path routing */}
        <Route exact path='/Logout' element={<Logout/>} />
        {/* Forgot password path routing */}
        <Route exact path='/forgotPassword' element={<ForgotPassword/>} />
  
  
          {/* Status path routing */}
        {/* <Route exact path='/Status' element={<Status />} /> */}
          {/* Student path routing */}
        <Route exact path='/Status/Etudiant_stat' element={<Etudiant_stat />} />
          {/* Teacher path routing */}
        <Route exact path='/Status/Prof_stat' element={<Prof_Status />} />
  
        {/* Profile page routing (Private route access)*/}
        <Route exact path="/Profile" element=
        {logged_Auth ? <Profile/> : <Navigate to={{pathname : "/login"}} replace={true}/>}/>
  
        {/* Admin/index page routing */}
        <Route exact path="/admin/index" element=
        {logged_admin_Auth ? <Admin/> : <Navigate to={{pathname : "/admin/login"}} replace={true}/>} />
        {/* admin/login page routing */}
        <Route exact path="/admin/login" element=
        {logged_admin_Auth ? <Navigate to={{pathname : "/admin/index"}} replace={true}/> : <LoginAdmin/>} />
        {/* admin/signup page routing */}
        <Route exact path="/admin/signup" element=
        {logged_admin_Auth ? <Navigate to={{pathname : "/admin/index"}} replace={true}/> : <SignUpAdmin/>}/>
        {/* admin/Dashboard page routing */}
        <Route exact path="/admin/dashboard" element=
        {logged_admin_Auth ? <DashboardAdmin/> : <Navigate to={{pathname : "/admin/login"}} replace={true}/>}/>

  
        {/* Profile/Dashboard page routing */}
        <Route exact path="/Profile/Dashboard" element={<Dashboard/>} />
        {/* Profile/infos page routing */}
        <Route exact path='/Profile/infos' element={<Infos/>} />

      {/* Private routes Create/Modify/Delete Section (accessed only by prof role) */}

       {/* Create Section */}
       <Route exact path='/Profile/Section/Create_sec' element={<Create_section/>}/>
       {/* Modify Section */}
       <Route exact path='/Profile/Section/Modify_sec' element={<Modify_section/>}/>
       {/* Delete Section */}
       <Route exact path='/Profile/Section/Delete_sec' element={<Delete_section/>}/>
  
       <Route exact path='/Profile/Section/ajouter_stagier' element={<Ajouter_Stagier/>}/>
      </Routes> 
    </Suspense>
    );
}
export default Routing; 
  
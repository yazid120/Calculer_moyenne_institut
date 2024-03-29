import React, { createContext, useReducer, Suspense  } from "react";
import { wait } from "@testing-library/user-event/dist/utils";
import { initialState, reducer } from "./reducer/UseReducer";
// importing components from react-router-dom package
import{ Routes, Route, Navigate }from 'react-router-dom'; 
import NavigationBar from './Partials/NavBar'; 
import NavbarAdmin from "./views/Admin/Partial/NavbarAdmin";
import Footer from "./Partials/footer";
import Routing from "./Router/Routing";

//User Creat context Api
export const UserContext =createContext();


function App(){
  const [state , dispatch] = useReducer(reducer, initialState); 
  const Admin_auth = localStorage.getItem('Admin_auth');

  return(
  <>
  <UserContext.Provider value={{state, dispatch}}>
    {Admin_auth
       ? <NavbarAdmin />
       : <NavigationBar />
    }
   
   <div className="container">
     <Routing />
   </div>
    
    <Footer/>
  </UserContext.Provider>
  </>
  ); 
}

export default App; 

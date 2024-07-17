import React from "react";
import { RouteObject } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Home from "./views/home";
import Login from "./views/Auth/login";
import Register from "./views/Auth/register";
import Dashboard from "./views/Dashboard";

export const routes: RouteObject[]=[
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/signup',
        element:<Register/>
    },
    {
        element:<ProtectedRoutes/>, 
        children:[
            {
                path:'/dashboard',
                element:<Dashboard/>
            }
        ],
    },
]
import React from "react";
import { useNavigate, Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoutes = ()=>{
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <Outlet/> : <Navigate to='login'/>
};
export default ProtectedRoutes;
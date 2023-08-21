import React from "react";
import { useState,useEffect } from "react";
import axios from "axios"; 
import { Navigate,useNavigate } from "react-router-dom";

const LoginAdmin = function(){
    const [email,SetEmail]=useState(''); 
    const [password,SetPassword]=useState(''); 
    const Navigate = useNavigate();

    const HandleLogin = async function(e){
      e.preventDefault();
      const Api_link = "http://localhost/Calculer_moyenne_institut/Action/Admin/loginAdmin.php";
      let input_Data = {
        email:email, 
        password:password
      }
    try{
     await axios.post(Api_link, input_Data).then(response=>{
      console.log(response.data);
      if(response.data = 'login user successful'){
        Navigate('/admin/index')
      }
     });
    }catch($e){
    }
    }


    return(
        <>
        <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
   <form method="post" onSubmit={HandleLogin}>
    <div className="mb-6">
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
      <input type="email" id="email" className="bg-gray-50 border border-gray-300 
      text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
      dark:focus:border-blue-500" placeholder="name@flowbite.com" 
      onChange={(e)=>SetEmail(e.target.value)} />
   </div>
  <div className="mb-6">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 
    text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
    dark:focus:border-blue-500"  
    onChange={(e)=>SetPassword(e.target.value)}/>
  </div>
  <div className="flex items-start mb-6">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 
      focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600
       dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"  />
    </div>
    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
 </form>
</div>
</section>
        </>
    )
}
export default LoginAdmin; 
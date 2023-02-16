import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";


let Admin = function(){
 
  const [users, SetUsers] = useState([]); 

  
  function getUsers(){
    axios.get('https://localhost/Calculer_moyenne_institut/Action/profile.php')
    .then(function(response){
      let arr = []; 
      console.log(response.data); 
      SetUsers(response.data);
    }); 
  }

  useEffect( ()=>{
     getUsers(); 
  }, []); 

    const arr = ['bobby', 'hadz', 'com'];

    return(
      <>
      <div>
        <h1>Admin user</h1>
      </div>

      

  
    <div>
      {arr.map((element, index) => {
        return (
          <div key={index}>
            <h2>{element}</h2>
          </div>
        );
      })
      }
    </div>

      <div className="">
        <p>List of All users</p>
        <table border={1}>
          <thead>
            <tr>
              <th>User id</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>User password</th>
            </tr>
          </thead>
          <tbody>
              { 
                users.map((user,key) => 
                    <tr key={key}>
                      <td>{user.id}</td>
                      <td>{user.usersName}</td>
                      <td>{user.usersemail}</td>
                      <td>{user.userspassword}</td>
                    </tr>
                )
              }    
          </tbody>
        </table>

      </div>
      </>
    ); 
}
export default Admin;
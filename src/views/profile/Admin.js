import axios from "axios";
import React from "react";
import { useState,useEffect, } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 


let Admin = function(){
  const [users, SetUsers] = useState([]); 
  const Navigate = useNavigate(); 
  
  function getUsers(){
    axios.get('http://localhost/Calculer_moyenne_institut/Action/profile.php'
    ).then(function(response){
      let arr = []; 
      // console.log(response.data); 
      SetUsers(response.data);
    }); 
  }

  useEffect( ()=>{
     getUsers(); 
  }, []);
  
  
  function DeleteUser(){
    console.log('delete user id'); 

  }

  function EditUser_page(){
    Navigate('/profile/edit');  
  }

  let ListUsers_Object = [
    {User_id:'User id'},
    {User_Name:'User Name'},
    {User_Email:'User Email'},
    {User_password:'User password'},
    {Users_edit: 'Edition'},
    {edit_user:'Edit'}, 
    {Delete_user:'Delete'}, 
  ]

    return(
      <>
      <div>
        <h1>Admin user</h1>
      </div>
  
      <div className="Users_list_container">
        <p>List of All users</p>
        <table border={1}>
          <thead>
            <tr>
              <th>{ListUsers_Object[0].User_id}</th>

              <th>{ListUsers_Object[1].User_Name}</th>

              <th>{ListUsers_Object[2].User_Email}</th>

              <th>{ListUsers_Object[3].User_password}</th>

              <th >{ListUsers_Object[4].Users_edit}</th>
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

                      <td>
                        {/* <Link> edit</Link> */}
                        <button className="Edition_modif_user Edit" onClick={EditUser_page}>
                          {ListUsers_Object[5].edit_user}
                        </button>
                        <button className="Edition_modif_user Delete" onClick={DeleteUser}>{
                        ListUsers_Object[6].Delete_user}</button>
                        
                      </td>
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
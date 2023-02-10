import { Link } from 'react-router-dom'; 
import React, { useContext } from 'react';
import { Component } from 'react';
import axios from 'axios';
import UserContext from '../App';


class login extends Component{
  //constroctor support login
  constructor(props){
   super(props); 
   this.onChangeEmail = this.onChangeEmail.bind(this); 
   this.onChangePassword = this.onChangePassword.bind(this); 
   this.onSubmitionLogin = this.onSubmitionLogin.bind(this);   
  
   this.state ={
    email:'', 
    Password:'',
    Name:'',
   }
  }
  
  static main_context = useContext;

  onChangeEmail(e){
    this.setState({
      email:e.target.value
    }); 
  }
  onChangePassword(e){
    this.setState({
      Password:e.target.value
    });
  }
  
  onSubmitionLogin(e){
   e.preventDefault(); 
   let error_Handle=[
    {empty_input:'input fields are empty'}
   ]

   let login_Object ={
     email:this.state.email,
     password:this.state.Password,
   } 
   let error_element = document.getElementById('empty_input_error'); 
   let invalid_usr_info = document.getElementById('invalid_user_infos'); 
   let wrong_pwd_r = document.getElementById('wrong_password_rr'); 
  axios.post('http://localhost/Calculer_moyenne_institut/Action/login_Auth.php',login_Object)
  .then(
      response=>{
        console.log(response.data); 
        // Empty inputs infos
        if(response.data == 'empty inputs'){
        // document.getElementById('error_login_handle').appendChild(element_error); 
          error_element.classList.replace('hide','show'); 
        }else{
          error_element.classList.replace('show','hide'); 
        }
        // invalid user information
        if(response.data == 'invalid user infos'){
          invalid_usr_info.classList.replace('hide','show'); 
        }else{
          invalid_usr_info.classList.replace('show','hide');
        }
        // Wrong password 
        if(response.data == 'incorrect password'){
          // console.log('Wrong password'); 
          wrong_pwd_r.classList.replace('hide','show');
        }else{
          wrong_pwd_r.classList.replace('show','hide');
        }
        if(response.data == 'Correct user Login'){
          // dispatch({type:'USER', payload:true})
          window.location.href ='http://localhost:3000/profile'; 
        }

    }); 
  }

    render(){
      const {state, dispatch} = this.context; 
      return(
      <>
      <h1 className='heading_subtitle'>login page</h1>
      {/* error handling */}
      <div className='error_handling' id='error_login_handle'>
       <p id="empty_input_error" className='error_alix hide'>input fields are empty</p>
       <p id="invalid_user_infos" className='error_alix hide'>invalid user infos</p>
       <p id="wrong_password_rr" className='error_alix hide'>Wrong password</p>
      </div>
      <form  method='post' className='Registration_Format'>
       <label htmlFor='' className='label_subForm'>
       Email address:
       </label><br />
       <input type="email" name="" className='registration_input'
       value={this.state.email} onChange={this.onChangeEmail}/><br />
       <label htmlFor='' className='label_subForm'>
       password:
       </label><br />
       <input type="password" name="" className='registration_input'
       value={this.state.Password} onChange={this.onChangePassword}/><br />

       <button type="submit" name="" className="submition_Btn"
        onClick={this.onSubmitionLogin}>
        login
       </button>
      </form>
        <p>{this.state.email}</p>
        <p>{this.state.Password}</p>
      </>
      );
    }
}
export default login; 
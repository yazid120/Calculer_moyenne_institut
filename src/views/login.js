import { Link } from 'react-router-dom'; 
import React from 'react';
import { Component } from 'react';
import axios from 'axios';


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
  axios.post('http://localhost/Calculer_moyenne_institut/Action/login_Auth.php',login_Object)
  .then(
      response=>{
        if(response.data == 'empty inputs'){
        // document.getElementById('error_login_handle').appendChild(element_error); 
          error_element.classList.replace('hide','show'); 
        }else{
          error_element.classList.replace('show','hide'); 
        }
    }); 
  }

    render(){
      return(
      <>
      <h1 className='heading_subtitle'>login page</h1>
      {/* error handling */}
      <div className='error_handling' id='error_login_handle'>
       <p id="empty_input_error" className='error_alix hide'>input fields are empty</p>
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
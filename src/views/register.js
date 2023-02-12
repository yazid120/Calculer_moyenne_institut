import { Component } from 'react';
import React from 'react';
import { Link } from 'react-router-dom'; 
import '../style/register.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

class Register extends Component{
   // Consturctor function support
constructor(props){
   super(props); 
   this.onChangeName = this.onChangeName.bind(this); 
   this.onChangeEmail = this.onChangeEmail.bind(this); 
   this.onChangePassword = this.onChangePassword.bind(this); 
   this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this); 
   this.onsubmitRegister = this.onsubmitRegister.bind(this); 

   this.state ={
      name: '',
      email: '', 
      password: '', 
      ConfirmPassword: '', 
   }

}
onChangeName(e){
   this.setState({
     name:e.target.value
   }); 
}
onChangeEmail(e){
   this.setState({
    email:e.target.value
   }); 
}
onChangePassword(e){
   this.setState({
      password:e.target.value
   })
}
onChangeConfirmPassword(e){
   this.setState({
      ConfirmPassword:e.target.value
   })
}
onsubmitRegister(e){
   e.preventDefault(); 
   let user_Object ={
      name:this.state.name,
      email:this.state.email, 
      password:this.state.password, 
      ConfirmPassword:this.state.ConfirmPassword,
   }
   let Empty_error = document.getElementById('empty_input_error');
   let Invalid_u_error = document.getElementById('Invalid_User_Name_error'); 
   let Unmatched_pwd_error = document.getElementById('unmatched_password'); 
   //axios connection with the backend (POST request)
 axios.post('http://localhost/Calculer_moyenne_institut/Action/register_Auth.php',
 user_Object).then(response =>{
   let C= response.data ==1; 
   // document.write(c);
   console.log(response.data);  
   if(response.data == 'empty inputs fields'){
    Empty_error.classList.replace('hide','show'); 
  }else{
    Empty_error.classList.replace('show','hide');  
  }
   if(response.data == 'Invalid User Name'){
     Invalid_u_error.classList.replace('hide','show');
   }else{
      Invalid_u_error.classList.replace('show','hide'); 
   }
   if(response.data == 'password does not match'){
     Unmatched_pwd_error.classList.replace('hide','show');
   }else{
      Unmatched_pwd_error.classList.replace('show','hide'); 
   }
   
  if(C == true){
   alert('registration successful');
   window.location.href ='http://localhost:3000/Status'; 
  }
 
 }); 
 
}



 
render(){
    return(
        <>
        <h1 className='heading_subtitle'>Register Page</h1>
        <div className='error_handling'>
        <p id="empty_input_error" className='error_alix hide'>input fields are empty</p>
        <p id="Invalid_User_Name_error" className='error_alix hide'>invalid User Name</p>
        <p id="unmatched_password" className='error_alix hide'>Your repassword does not match 
        your password</p>
        </div>
        <form action='' method='post'
        className='Registration_Format'>
      {/* User Name input */}
         <label htmlFor='' className='label_subForm'>
            UserName:
         </label><br />
         <input type="text" name="User_name" id="" 
         className='registration_input'
         value={this.state.name} onChange={this.onChangeName}/><br />
      {/* User email input */}
         <label htmlFor='' className='label_subForm'>
            Email address:
         </label><br />
         <input type="email" name="" id=""
         className='registration_input' 
         value={this.state.email} onChange={this.onChangeEmail}/><br />
      {/* User password input */}
         <label htmlFor='' className='label_subForm'>
            password:
         </label><br />
         <input type="password" name="" id=""
         className='registration_input'
         value={this.state.password} onChange={this.onChangePassword}/><br />
      {/* User repasseword input */}
         <label htmlFor='' className='label_subForm'>
            repeate password:
         </label><br />
         <input type="password" name="repeact_password" id=""
         className='registration_input'
      value={this.state.ConfirmPassword} onChange={this.onChangeConfirmPassword}/><br />
      {/* User registration Btn */}
         <button type="submit" name="register" className='submition_Btn'
         onClick={this.onsubmitRegister}>
            Register
         </button>
        </form> 
         
        {/* <p>{this.state.name}</p>
        <p>{this.state.email}</p>
        <p>{this.state.password}</p> */}
        </>
    )
}
}

export default Register; 
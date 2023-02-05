import { Component } from 'react';
import React from 'react';
import { Link } from 'react-router-dom'; 
import '../style/register.css'
import axios from 'axios';

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
   if(this.state.password == this.state.CofirmPassword){
   let user_Object ={
      name:this.state.name,
      email:this.state.email, 
      password:this.state.password, 
      ConfirmPassword:this.state.ConfirmPassword,
   };
 axios.post('http://localhost/Calculer_moyenne_institut/Action/register.php',
 user_Object)
 .then(respond => console.log(respond.data))
 .catch(error =>{
  console.log(error.response)
 }); 

}else{
   console.log('Your Submition does not match !!');
}
}

 
render(){
    return(
        <>
        <h1 className='heading_subtitle'>Register Page</h1>
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
        </>
    )
}
}

export default Register; 
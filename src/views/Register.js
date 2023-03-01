import { Component } from 'react';
import React from 'react';
import { Link } from 'react-router-dom'; 
import '../style/register.css';
import axios from 'axios';
import { AiOutlineEye , AiOutlineEyeInvisible} from 'react-icons/ai'; 
// import Select from 'react-select';

const groupStyles = {
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
 };
 const groupBadgeStyles = {
   backgroundColor: '#EBECF0',
   borderRadius: '2em',
   color: '#172B4D',
   display: 'inline-block',
   fontSize: 12,
   fontWeight: 'normal',
   lineHeight: '1',
   minWidth: 1,
   padding: '0.16666666666667em 0.5em',
   textAlign: 'center',
 };


class Register extends Component{
   // Consturctor function support
constructor(props){
   super(props); 
   this.onChangeName = this.onChangeName.bind(this); 
   this.onChangeEmail = this.onChangeEmail.bind(this); 
   this.onChangePassword = this.onChangePassword.bind(this); 
   this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this); 
   this.onChangeuserRole = this.onChangeuserRole.bind(this); 
   this.onsubmitRegister = this.onsubmitRegister.bind(this); 
   this.checkInputFormat = false;  
   this.secureText_input = true;
   this.change_secure_InputFormat = true; 

   this.state ={
      name: '',
      email: '', 
      password: '', 
      ConfirmPassword: '', 
      user_role:''
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
onChangeuserRole(e){
   this.setState({
      user_role:e.target.value
   })
}

UpdateInputFormat(){
   this.setState({
    ...this.state, 
      secureText_input : !this.state.secureText_input
   }); 
 }
 UpadateUnsecureInputFormat(){
   this.setState({
     ...this.state, 
      change_secure_InputFormat : !this.state.change_secure_InputFormat,
    });
 }



onsubmitRegister(e){
   e.preventDefault(); 
   let user_Object ={
      name:this.state.name,
      email:this.state.email, 
      password:this.state.password, 
      ConfirmPassword:this.state.ConfirmPassword,
      user_role:this.state.user_role
   }
   let Empty_error = document.getElementById('empty_input_error');
   let Invalid_u_error = document.getElementById('Invalid_User_Name_error'); 
   let Unmatched_pwd_error = document.getElementById('unmatched_password');
   let user_already_exist_error = document.getElementById('user_already_exists'); 
   let forgot_add_status = document.getElementById('forgot_add_status');
   //axios connection with the backend (POST request)
 axios.post('http://localhost/Calculer_moyenne_institut/Action/register_Auth.php',
 user_Object).then(response =>{
   let C= response.data; 
   // document.write(c);
   console.log(response.data);  
   //Error Management
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
   if(response.data == 'User already exist !!'){
      user_already_exist_error.classList.replace('hide','show'); 
   }else{ 
      user_already_exist_error.classList.replace('show','hide'); 
   }

   if(response.data == 'password does not match'){
     Unmatched_pwd_error.classList.replace('hide','show');
   }else{
      Unmatched_pwd_error.classList.replace('show','hide'); 
   }
   if(response.data == 'Your forgot to add your status'){
      forgot_add_status.classList.replace('hide','show'); 
   }else{
      forgot_add_status.classList.replace('show','hide'); 
   }
   
 if(response.data[0].id){
   localStorage.setItem('UserId',response.data[0].id);
   localStorage.setItem('local_status', true);

   if(this.state.user_role == 'Stagier'){
      window.location.replace('/Status/Etudiant_stat');
   }
   if(this.state.user_role == 'Professeur'){
      window.location.replace('/Status/Prof_stat');
   }
}
 
 }); 
 
}



 
render(){

   let registration_Object =[
      {head:'Register Page'},
      {empty_fields:'input fields are empty'},
      {Invalid_name:'invalid User Name'},
      {pass_repassNmarch :'Your repassword does not match your password'},
      {user_alredy_exist :'User already exist !!'}, 
      {forgot_add_status : 'Your forgot to add your status'}
   ];
   let role_Object = [
      {default_role:'Selectioner votre Status'},
      {Stagier_role:'Stagier'},
      {Professeur_role:'Professeur'}
   ]
    return(
        <>
        <h1 className='heading_subtitle'>{registration_Object[0].head}</h1>
        <div className='error_handling'>
        <p id="empty_input_error" className='error_alix hide'>
         {registration_Object[1].empty_fields}</p>

        <p id="Invalid_User_Name_error" className='error_alix hide'>
         {registration_Object[2].Invalid_name}</p>

        <p id="unmatched_password" className='error_alix hide'>
         {registration_Object[3].pass_repassNmarch}</p>

        <p id="user_already_exists" className='error_alix hide'>
         {registration_Object[4].user_alredy_exist}</p>


        <p id="forgot_add_status" className='error_alix hide'>
         {registration_Object[5].forgot_add_status}</p>
        </div>

        <form action='' method='post'
        className='Registration_Format'>
      {/* User Name input */}
         <label htmlFor='' className='label_subForm'>
            User Name:
         </label><br />
         <input type="text" name="User_name"  
         className='registration_input' 
         value={this.state.name} onChange={this.onChangeName}/><br />
      {/* User email input */}
         <label htmlFor='' className='label_subForm'>
            Email address:
         </label><br />
         <input type="email" name="" 
         className='registration_input' 
         value={this.state.email} onChange={this.onChangeEmail}/><br />

      {/* User password input */}
         <label htmlFor='' className='label_subForm'>
            password:
         </label><br />
      <div className='container_password_wrapp_func'>
         <input type={this.state.change_secure_InputFormat ? "text" : "password"} name="" 
         className='registration_input'
         value={this.state.password} onChange={this.onChangePassword}/>
         {/* visible and invisible eye */}
         <div className='anable_disble_password' onClick={this.UpadateUnsecureInputFormat.bind(this)}>
         {
         this.state.change_secure_InputFormat ?
         <>
         <AiOutlineEye />
         </>
         :
         <>
         <AiOutlineEyeInvisible/>
         </>
         } 
         </div>
      </div>

      {/* User repasseword input */}
         <label htmlFor='' className='label_subForm'>
            repeate password:
         </label><br />
         <div className='container_password_wrapp_func'>
         <input type={this.state.change_secure_InputFormat ? "text" : "password"} name="repeact_password" 
         className='registration_input'
      value={this.state.ConfirmPassword} onChange={this.onChangeConfirmPassword}/><br />
         {/* visible and invisible eye */}
         <div className='anable_disble_password' onClick={this.UpadateUnsecureInputFormat.bind(this)}>
         {this.state.change_secure_InputFormat ?
            <>
             <AiOutlineEye />
            </>
             :
            <>
            <AiOutlineEyeInvisible/>
            </>
            }
         </div>
      </div>

      <select name="role_user" onChange={this.onChangeuserRole} className="Selection_specialties"
      style={groupStyles} defaultValue={role_Object[0].default_role}>

         <option value={""}>{role_Object[0].default_role}</option>
         <option name="Stagier_role" value={role_Object[1].Stagier_role}
         style={groupBadgeStyles}>
            {role_Object[1].Stagier_role}
         </option>
         
         <option name="Professeur_role" value={role_Object[2].Stagier_role}
         style={groupBadgeStyles}>
           {role_Object[2].Professeur_role}
         </option>

      </select>

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

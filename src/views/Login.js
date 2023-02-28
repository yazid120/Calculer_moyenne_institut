import { Link } from 'react-router-dom'; 
import React, { useContext } from 'react';
import { Component } from 'react';
import axios from 'axios';
import UserContext from '../App';
import '../style/register.css';
import { AiOutlineEye , AiOutlineEyeInvisible} from 'react-icons/ai'; 
import { updateExpression } from '@babel/types';


class Login extends Component{
  //constroctor support login
  constructor(props){
   super(props);
   this.onChangeName = this.onChangeName.bind(this); 
   this.onChangeEmail = this.onChangeEmail.bind(this); 
   this.onChangePassword = this.onChangePassword.bind(this); 
   this.onSubmitionLogin = this.onSubmitionLogin.bind(this); 
   this.checkInputFormat = false;  
   this.secureText_input = true;
   this.change_secure_InputFormat = true; 
  
   this.state ={
    email:'', 
    Password:'',
    Name:'',
    redirectToProfile:false,
   }
  }
  
  static main_context = useContext;

  onChangeName(e){
    this.setState({
      Name:e.target.value
    }); 
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

  
  UpdateInputFormat(){
    this.setState({
     ...this.state, 
       secureText_input : !this.state.secureText_input
    }); 
  }
  UpadateUnsecureInputFormat(){
    this.setState({
      ...this.state, 
       change_secure_InputFormat : !this.state.change_secure_InputFormat
    });
  }
  
  onSubmitionLogin(e){
   e.preventDefault(); 

   let login_Object ={
     email:this.state.email,
     password:this.state.Password,
     Name:this.state.Name,
   } 
   let error_element = document.getElementById('empty_input_error'); 
   let invalid_usr_info = document.getElementById('invalid_user_infos'); 
   let Unmatched_user_name = document.getElementById('user_name_error'); 
   let unexistent_email_address = document.getElementById('unxist_mail_add'); 
  axios.post('http://localhost/Calculer_moyenne_institut/Action/login_Auth.php',login_Object)
  .then(
      response=>{
        console.log(response.data); 
        // Empty inputs infos
        if(response.data == 'empty inputs'){
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
        // Wrong user Name
        if(response.data == 'User Name dont match'){
          Unmatched_user_name.classList.replace('hide','show');
        }else{
          Unmatched_user_name.classList.replace('show','hide'); 
        }
        // Unexistent user email address
        if(response.data == 'unexistent email address'){
          unexistent_email_address.classList.replace('hide','show');
        }else{
          unexistent_email_address.classList.replace('show','hide'); 
        }
        
        if(response.data[0].id){
          window.localStorage.setItem('UserId',response.data[0].id); 
          window.location.replace('/profile');  
        }else{
         
        }

    }) 
  }
 
    render(){
      const {state, dispatch} = this.context;  
      let Display_infos = this.Display_infos;
          Display_infos=[
             {label_Name:'Name:',label_class:'label_subForm'}, 
             {label_Email:'Email address:'},
             {label_password:'Password:'}
           ]; 
      let Error_infos = this.Error_infos; 
          Error_infos =[
            {empty_input:'input fields are empty'}, 
            {invalid_usr_inf:'invalid user infos'},
            {user_name_error:'User name does not match'},
            {wrng_pwd:'unexistent email address'}
          ];
      return(
      <>
      <h1 className='heading_subtitle'>login page</h1>
      {/* error handling */}
      <div className='error_handling' id='error_login_handle'>
       <p id="empty_input_error" className='error_alix hide'>
        {Error_infos[0].empty_input}
        </p>
       <p id="invalid_user_infos" className='error_alix hide'>
        {Error_infos[1].invalid_usr_inf}
        </p>
       <p id="user_name_error" className="error_alix hide">
         {Error_infos[2].user_name_error}
       </p>
       <p id="unxist_mail_add" className='error_alix hide'>
        {Error_infos[3].wrng_pwd}
       </p>
      </div>

      <form  method='post' className='Registration_Format'>
        <label htmlFor='' class_name={Display_infos[0].label_subForm}>
          {Display_infos[0].label_Name}
        </label>
        <input type="text" name="" className='registration_input'
        value={this.state.Name} onChange={this.onChangeName}/>

       <label htmlFor='' className={Display_infos[0].label_subForm}>
         {Display_infos[1].label_Email}
       </label><br />
       <input type="email" name="" className='registration_input'
       value={this.state.email} onChange={this.onChangeEmail}/><br />

       <label htmlFor='' className={Display_infos[0].label_subForm}>
       {Display_infos[2].label_password}
       </label><br />
       <div className='container_password_wrapp_func'>
       <input type={this.state.change_secure_InputFormat ? "text" : "password"} name="" className='registration_input'
       value={this.state.Password} onChange={this.onChangePassword}/><br />

          <div className='anable_disble_password' onClick={this.UpadateUnsecureInputFormat.bind(this)}>
            {/* visible and invisible eye */}
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

       <button type="submit" name="" className="submition_Btn"
        onClick={this.onSubmitionLogin}>
        login
       </button>
      </form>
        {/* <p>{this.state.email}</p>
        <p>{this.state.Password}</p> */}
      </>
      );
    }
}
export default Login; 

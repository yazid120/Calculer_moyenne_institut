import { Link } from 'react-router-dom'; 
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
   let login_Object ={
     email:this.state.email,
     password:this.state.Password,
   }
  axios.post('http://localhost/Calculer_moyenne_institut/Action/login_Auth.php',login_Object)
  .then(
      response=>{
        console.log(response.data); 
    }); 
  }
  Registration_Access(){
    // e.preventDefault();
  }

  
    render(){
      return(
      <>
      <h1 className='heading_subtitle'>login page</h1>
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
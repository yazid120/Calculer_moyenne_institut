import React from "react";
import { Component } from "react";
import axios from 'axios';
import image_etudiant from "../../images/2-removebg-preview.png";
import image_prof from "../../images/1-removebg-preview.png";

class Status extends Component{
    constructor(e){
      super(e); 
      this.OnChange_status = this.OnChange_status.bind(this); 
      this.Status_submit = this.Status_submit.bind(this); 
    
  this.state ={
    status : '',
  }
}

OnChange_status(e){
    this.setState({
     status: e.target.value
    }); 
}
Status_submit(e){
    e.preventDefault(); 
    let User_Status = {
      status:this.state.status,
    }
    axios.post('http://localhost/Calculer_moyenne_institut/Action/Status_Auth.php',
    User_Status).then(response =>{

      console.log(response.data); 
    })
    // console.log(this.state.status); 
}

   render(){
    const Status_Object =[
        {Status_user:'Etudiant'}, 
        {Status_user:'Professeur'},
        {Submit_status:'submit'}
    ]
    const Stat_error =[
      {no_choise_error:'You need to choise a status'}
    ]
    return(
        <>
      <div className="Status_sub_title">
        <h1>Status page</h1>
      </div>

      <div className="">
        <p>Choisir votre Status</p>
         <p id="error_noChoise_Access" className='error_alix hide'>
           {Stat_error[0].no_choise_error}</p>

        <div className="Container_option_userStatus">
           <form className="x_formOption_all">
              {/* User Status option */}
             <div className="usr_option">
                {/* Student Option */}
                <div className="Check_fild_opt">
                <label htmlFor="Opt_take" className="label_all_wrapp">
                <p>{Status_Object[0].Status_user}</p>
                <img src={image_etudiant} alt="react-etudiant-part" 
                style={{width:188,height:200}}/>

                <input type="radio" className="check_option radio_hide"
                 name="Option_check_stat" id="Opt_take"
                value={Status_Object[0].Status_user} onChange={this.OnChange_status}
                checked={this.state.status == Status_Object[0].Status_user}/>
                </label>
                </div>
                 
                 {/* Teacher Option */}
                <div className="Check_fild_opt" >
                <label htmlFor="Opt_take_P" className="label_all_wrapp">
                <p>{Status_Object[1].Status_user}</p>
                <img src={image_prof} alt="react-prof-part"
                style={{height:205,width:205}}/>

                 <input type="radio" className="check_option radio_hide"
                name="Option_check_stat" id="Opt_take_P"
                value={Status_Object[1].Status_user} onChange={this.OnChange_status}
                checked={this.state.status == Status_Object[1].Status_user}/>
                </label>
                </div>
                
             </div>

             {/* Status submition button */}
             <button name="sbmit_stat"type="submit" className="Sub_Status_btn"
             onClick={this.Status_submit}>
              {Status_Object[2].Submit_status} 
             </button>
           </form>
        </div>
      </div>
      </>
    );
   }
}
export default Status; 
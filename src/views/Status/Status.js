import React from "react";
import { Component } from "react";

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
     status:e.target.value
    }); 
}
Status_submit(e){
    e.preventDefault(); 
    console.log(this.state.status); 
}

   render(){
    const Status_Object =[
        {Status_user:'Etudiant'}, 
        {Status_user:'Professeur'},
        {Submit_status:'submit'}
    ]
    return(
        <>
      <div className="Status_sub_title">
        <h1>Status page</h1>
      </div>
      <div className="">
        <p>Choisir votre Status</p>

        <div className="Container_option_userStatus">
           <form className="x_formOption_all">
              {/* User Status option */}
             <div className="usr_option">
                {/* Student Option */}
                <div className="">
                <label htmlFor="">
                {Status_Object[0].Status_user}
                </label>
                <input type="radio" className="check_option" name="Option_check_stat"
                value={Status_Object[0].Status_user}/>
                </div>
                 
                 {/* Teacher Option */}
                <div className="">
                <label htmlFor="">
                {Status_Object[1].Status_user}
                </label>
                <input type="radio" className="check_option" name="Option_check_stat"
                value={Status_Object[1].Status_user}/>
                </div>
             </div>

             {/* Status submition button */}
             <button name="sbmit_stat"type="submit" className="Sub_Status_btn">
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
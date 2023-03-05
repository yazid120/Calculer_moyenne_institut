import React from "react";
import { Component } from "react";
import { useState } from "react";
import axios from 'axios'; 


class Prof_Status extends Component{
    constructor(props){
        super(props); 
      this.isloading = this.isloading.bind(this); 
      this.setToloading = this.setToloading.bind(this); 
      this.Submit_stat = this.Submit_stat.bind(this); 
      this.OnChangeNom = this.OnChangeNom.bind(this); 
      this.OnChangePrenom = this.OnChangePrenom.bind(this); 


      this.state ={
        nom:'',
        prenom:'',
        user_state:''
      };
    }

    OnChangeNom(e){
      this.setState({
         nom:e.target.value
      });
     }
     OnChangePrenom(e){
       this.setState({
         prenom:e.target.value
       })
     }

    isloading(event){
        event = this.state.state_load = false; 
           return event;
        }
        setToloading(event){
         event = this.state.state_load = true; 
           return event; 
        }
    
        Submit_stat(e){
            e.preventDefault(); 

        let stat_prof ={
          nom:this.state.nom, 
          prenom:this.state.prenom,
          id: localStorage.getItem('UserId'),
          Status: localStorage.getItem('User_status')
        }
         

        let empty_input_error = document.getElementById('empty_input_error'); 
       axios.post('http://localhost/Calculer_moyenne_institut/Action/Stat_type/Stat_prof_Auth.php'
            ,stat_prof).then(response =>{

              if(response.data == 'empty status inputs'){
                empty_input_error.classList.replace('hide','show');
              }else{
                empty_input_error.classList.replace('show','hide'); 
              }
            if(response.data = 'successful Teacher submition'){
              localStorage.removeItem('local_status'); 
              localStorage.removeItem('User_status');

              setTimeout(()=>{
              document.getElementById('spinner_wrapp').classList.replace('hide','show'); 
              window.location.replace('/profile');
              },10000); 
              
            }
             
            })
            // console.log(this.setToloading(e)); 
        }

    render(){
        let Sets_Object=[
            {F_name:'Nom'},
            {L_name:'Prenom'},
            {Sub_sets_btn:'Terminer'}
         ];
         let Error_infos =[
          {empty_input:'Empty input fields'}, 
         ]; 
        return( 
            <>
            <div>
                <h1>prof page infos remplir:</h1>
                <p className="">Poursuivre en tant que professeur</p>
            </div>
            {/* Error handling */}
        <div className='error_handling' id='error_login_handle'>
       <p id="empty_input_error" className='error_alix hide'>
        {Error_infos[0].empty_input}
        </p>
        </div>

            <form method="post" className="wrapp_form_setStat_user">
                <label htmlFor="" className="foreign_side_cl">
                    {Sets_Object[0].F_name}
                </label>
                <input type="text" className="Status_input_Vle"
                value={this.state.nom} onChange={this.OnChangeNom}/>

                <label htmlFor="" className="foreign_side_cl">
                   {Sets_Object[1].L_name}
                </label>
                <input type="text" className="Status_input_Vle"
                value={this.state.prenom} onChange={this.OnChangePrenom}/>

                <button type="submit" className="sub_stat_user_Button"
                onClick={this.Submit_stat}>
                  {Sets_Object[2].Sub_sets_btn }
                </button>

                {/* Spinner main */}
    <div className="spinner-container hide" id="spinner_wrapp">
      <div className="loading-spinner">
      </div>
    </div>
            </form>
            </>
        )
    }
}

export default Prof_Status; 
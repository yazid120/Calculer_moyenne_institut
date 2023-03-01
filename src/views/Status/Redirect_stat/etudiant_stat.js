import React from "react";
import { Component } from "react";
import { useState } from "react";
import axios from 'axios'; 


class Etudiant_stat extends Component{
    constructor(props){
        super(props);
    this.OnChangeNom = this.OnChangeNom.bind(this); 
    this.OnChangePrenom = this.OnChangePrenom.bind(this); 
    this.OnChangeNumStatus = this.OnChangeNumStatus.bind(this); 
    this.isloading = this.isloading.bind(this); 
    this.setToloading = this.setToloading.bind(this); 
    this.Submit_stat = this.Submit_stat.bind(this); 

      this.state ={
        nom:'',
        prenom:'',
        num_stagier:'',
        user_state:'',
        SetLoading: false
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
    OnChangeNumStatus(e){
        this.setState({
        num_stagier:e.target.value
        });
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

         let status = []; 
         let url_header ='http://localhost:3000/Status/Etudiant_stat';

        let stat_etud ={
            nom:this.state.nom, 
            prenom:this.state.prenom, 
            num_stagier:this.state.num_stagier,
            id: localStorage.getItem('UserId'),
            Status: localStorage.getItem('User_status')
        }

        let empty_input_error = document.getElementById('empty_input_error'); 
        let Incorrect_stg_num = document.getElementById('Incorrect_stg_num'); 
        let section_nb_char = document.getElementById('section_nb_char'); 

    axios.post('http://localhost/Calculer_moyenne_institut/Action/Stat_type/Stat_etud_Auth.php'
        ,stat_etud).then(response =>{
          console.log(response.data);
          if(response.data == 'Empty input Status'){
             empty_input_error.classList.replace('hide','show'); 
          }else{
            empty_input_error.classList.replace('show','hide'); 
          }
          if(response.data == 'Incorrect stagier numbre'){
            Incorrect_stg_num.classList.replace('hide','show'); 
          }else{
            Incorrect_stg_num.classList.replace('show','hide'); 
          }
          if(response.data == 'Section numbre must cotain only numbers'){
            section_nb_char.classList.replace('show','hide');
          }else{section_nb_char.classList.replace('show','hide');
        }
          if(response.data == 'successful student submition'){
            localStorage.removeItem('local_status'); 
            localStorage.removeItem('User_status');
            window.location.replace('/profile');
          }
        });
        
    }

    render(){
         let Sets_Object=[
            {F_name:'Nom'},
            {L_name:'Prenom'},
            {Num_inscr:'registration number'},
            {Sub_sets_btn:'Terminer'}
         ]; 
         let Error_infos =[
          {empty_input:'Empty input fields'}, 
          {Incorrect_stg_num:'Incorrect stagier numbre'}, 
          {section_nb_char:'Section numbre must cotain only numbers'},
        ];
        //  console.log(this.state.state_load);
        return( 
            <>
            <div>
                <h1>Stagier page infos remplir:</h1>
                <p className="">Poursuivre en tant qu'étudiant</p>
            </div>
            {/* Error handling */}
        <div className='error_handling' id='error_login_handle'>
       <p id="empty_input_error" className='error_alix hide'>
        {Error_infos[0].empty_input}
        </p>
       <p id="Incorrect_stg_num" className='error_alix hide'>
        {Error_infos[1].Incorrect_stg_num}
        </p>
       <p id="section_nb_char" className="error_alix hide">
         {Error_infos[2].user_name_error}
       </p>
      </div>

            <form method="post" className="wrapp_form_setStat_user">
                {/* Nom */}
                <label htmlFor="" className="foreign_side_cl">
                    {Sets_Object[0].F_name}
                </label>
                <input type="text" className="Status_input_Vle"
                value={this.state.nom}  onChange={this.OnChangeNom}/>

                {/* Prenom */}
                <label htmlFor="" className="foreign_side_cl">
                   {Sets_Object[1].L_name}
                </label>
                <input type="text" className="Status_input_Vle"
                value={this.state.prenom} onChange={this.OnChangePrenom}/>

                {/* Numero stagier  */}
                <label htmlFor="" className="foreign_side_cl">
                  {Sets_Object[2].Num_inscr}
                </label>
                <input type="text" className="Status_input_Vle"
                value={this.state.num_stagier} onChange={this.OnChangeNumStatus}/>

                <button type="submit" className="sub_stat_user_Button"
                onClick={this.Submit_stat} >
                  {Sets_Object[3].Sub_sets_btn}
                </button>
    {/* Spinner main */}
     
    <div className="spinner-container" id="spinner_wrapp">
      {/* {this.state.SetLoading} */}
      <div className="loading-spinner">
      </div>
    </div>
    
            </form>
            </>
        )
    }
}

export default Etudiant_stat; 
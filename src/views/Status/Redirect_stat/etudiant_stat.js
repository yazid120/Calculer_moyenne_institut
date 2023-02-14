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
         let url_header ='http://localhost:3000/Status/Etudiant_stat?status=Etudiant';
         
        /*fetch(url_header).then(response =>{
            console.log(response.headers.get);
        // });*/
        

        let stat_etud ={
            nom:this.state.nom, 
            prenom:this.state.prenom, 
            num_stagier:this.state.num_stagier,
        }
        axios.post('http://localhost/Calculer_moyenne_institut/Action/Stat_type/Stat_etud_Auth.php'
        ,stat_etud).then(response =>{
          console.log(response.data);
        });
        // console.log(this.setToloading(e)); 
    }

    render(){
         let Sets_Object=[
            {F_name:'First Name'},
            {L_name:'Last Name'},
            {Num_inscr:'registration number'},
            {Sub_sets_btn:'Finish'}
         ]
        //  console.log(this.state.state_load);
        return( 
            <>
            <div>
                <h1>Stagier page infos remplir:</h1>
                <p className="">Poursuivre en tant qu'étudiant</p>
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
      <div className="loading-spinner">
      </div>
    </div>
            </form>
            </>
        )
    }
}

export default Etudiant_stat; 
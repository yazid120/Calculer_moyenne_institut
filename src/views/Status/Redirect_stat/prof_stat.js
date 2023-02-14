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
            axios.post('http://localhost/Calculer_moyenne_institut/Action/Stat_type/Stat_prof_Auth.php'
            ,)
            console.log(this.setToloading(e)); 
        }

    render(){
        // const [isloading, setToloading] = useState(false); 
        let Sets_Object=[
            {F_name:'First Name'},
            {L_name:'Last Name'},
            {Sub_sets_btn:'Finish'}
         ]
        return( 
            <>
            <div>
                <h1>prof page infos remplir:</h1>
                <p className="">Poursuivre en tant que professeur</p>
            </div>

            <form method="post" className="wrapp_form_setStat_user">
                <label htmlFor="" className="foreign_side_cl">
                    {Sets_Object[0].F_name}
                </label>
                <input type="text" className="Status_input_Vle"/>

                <label htmlFor="" className="foreign_side_cl">
                   {Sets_Object[1].L_name}
                </label>
                <input type="text" className="Status_input_Vle"/>

                <button type="submit" className="sub_stat_user_Button">
                  {Sets_Object[2].Sub_sets_btn}
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

export default Prof_Status; 
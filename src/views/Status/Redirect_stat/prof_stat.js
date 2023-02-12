import React from "react";
import { Component } from "react";

class Prof_Status extends Component{


    render(){
        let Sets_Object=[
            {F_name:'First Name'},
            {L_name:'Last Name'},
            {Sub_sets_btn:'Finish'}
         ]
        return( 
            <>
            <div>
                <h1>prof page infos remplir:</h1>
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

                <button type="submit" className="">
                  {Sets_Object[2].Sub_sets_btn}
                </button>
            </form>
            </>
        )
    }
}

export default Prof_Status; 
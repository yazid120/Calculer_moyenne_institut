import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';



let Modify_section = function(){
  const [ Data_section, Set_section] = useState({
    nom_sec:'',
    spec_sec:''
  }); 
  const navigate = useNavigate(); 

  const {nom_sec,spec_sec} = Data_section; 

  let Handle_update = (e)=>{
    Set_section({...Data_section,[e.target.name]:e.target.value});
  }

  let Update_section = (e)=>{
    e.preventDefault();
    console.log(Data_section);
  

  }


  let Modify_Section_Object=[
    {lab_01:'nom Section'},
    {lab_02:'identifient Section'},
    {lab_04:'Specialites de la Section'},
    {Modifier_sect:'Modifier cette section'}
  ]
  return( 
  <>
    <h1>Modifier une section</h1>

    <div className="formule_management_sections_wrapp">
      <form className="form_manage_clipse">
        <label htmlFor="">
          {Modify_Section_Object[0].lab_01}
        </label>
        <input type='text' className="manage_section_cr" 
        name='nom_sec' value={nom_sec} onChange={Handle_update}/>

        <label>
        {Modify_Section_Object[3].lab_04}
        </label>
        <select className="Selection_specialties" name="spec_sec"
        value={spec_sec}  onChange={Handle_update}
        >
          <option>Specialites</option>
          <option>Développement WEB</option>
          <option>SON</option>
          <option>IMAGE</option>
          <option>REASEAU SISCO</option>
        </select>

      <div className="Submition_container">
        <button type='submit' className="submition_new_section _Modify_section"
        onClick={Update_section}>
          {Modify_Section_Object[3].Modifier_sect}
        </button>
      </div>
      </form>
    </div>
    
  </>
  )
}
export default Modify_section; 
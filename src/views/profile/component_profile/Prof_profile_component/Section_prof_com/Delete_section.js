import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'; 



let Delete_section = function(){
  const [Data_section,Set_section] = useState({
    nom_sec:'',
    spec_sec:'',
    id:localStorage.getItem('UserId')
  }); 
  const navigate = useNavigate();

  const {nom_sec,spec_sec} = Data_section;

  let Handle_Delete_section = (e)=>{
    Set_section({...Data_section,[e.target.name]:e.target.value}); 
  }

  let Delete_section = (e)=>{
    e.preventDefault();

  // Error message creation
  let empty_identifier = document.getElementById('empty_identifier');
  let Loader_spinner = document.getElementById('spinner_wrapp'); 
  axios.delete('http://localhost/Calculer_moyenne_institut/Action/Section_management.php'
  ,{data:Data_section}).then(response=>{
    console.log(response.data); 
    if(response.data == 'empty infos'){
      Loader_spinner.classList.replace('hide','show');

      setTimeout(()=>{
        Loader_spinner.classList.replace('show','hide');
       empty_identifier.classList.replace('hide','show'); 
      },1200);
    }else{
      empty_identifier.classList.replace('show','hide');
    }
  }); 
  
  }

  let Delete_Section_Object=[
    {lab_01:'nom Section'},
    {lab_02:'identifient Section'},
    {lab_04:'Specialites de la Section'},
    {Supprime_sec:'Supprimer'}
  ]
  let error_handling_sectionCreaction = [
    {empty_identifiers:'Empty Section identifient'},
   ]; 
   let Success_handling_sectionCreation = [ 
    {Section_succ_creation:'Section Created Successfuly'}
   ]
  return( 
  <>
    <h1>Suppprimer une section</h1>
    <div className="formule_management_sections_wrapp">

    <div className="error_handling" id='error_login_handle'>
      <p  id="empty_identifier" className="error_alix hide">
        {error_handling_sectionCreaction[0].empty_identifiers}</p>
    </div>
    <div className="success_handling">
    <p  id="success_section_creation" className="success_alix hide">
        {Success_handling_sectionCreation[0].Section_succ_creation}
      </p>
    </div>

      <form className="form_manage_clipse">
        <label htmlFor="">
          {Delete_Section_Object[0].lab_01}
        </label>
        <input type='text' className="manage_section_cr" 
        name='nom_sec' value={nom_sec}
        onChange={Handle_Delete_section}/>

        <label>
        {Delete_Section_Object[2].lab_04}
        </label>
        <select className="Selection_specialties" name="spec_sec"
        value={spec_sec} onChange={Handle_Delete_section}>
          <option>Specialites</option>
          <option>Développement WEB</option>
          <option>SON</option>
          <option>IMAGE</option>
          <option>REASEAU SISCO</option>
        </select>

      <div className="Submition_container">
        <button type='submit' className="submition_new_section _delete_section"
        onClick={Delete_section}>
          {Delete_Section_Object[3].Supprime_sec}
          
        </button>
      </div>
      </form>

      
    </div>
    {/* Spinner main */}
    <div className="spinner-container hide" id="spinner_wrapp">
      <div className="loading-spinner">
      </div>
    </div>
  </>
  )
}
export default Delete_section; 
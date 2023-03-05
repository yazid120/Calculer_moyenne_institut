import React from "react";
import { FcAdvance ,FcRight} from "react-icons/fc";
import { useEffect, useState } from "react";
import axios from 'axios';
import { GiConsoleController } from "react-icons/gi";
import { useNavigate } from 'react-router-dom'; 


let Create_section = function(){
const [ Data_Section , Set_Section ] = useState({
    nom_sec :'', 
    nom_max_stag:'',
    spec_sec:'',
    id:localStorage.getItem('UserId')
});
   const navigate = useNavigate();
 
const {nom_sec, nom_max_stag ,spec_sec} = Data_Section; 

const Change_Handler_Section = (e)=>{
  Set_Section({...Data_Section,[e.target.name]:e.target.value})
}


let Creat_Section = (e)=>{
    e.preventDefault();

    let Data_CreationSection = JSON.stringify(Data_Section);

    // Error message creation
   let empty_identifier = document.getElementById('empty_identifier');
   let Loader_spinner = document.getElementById('spinner_wrapp'); 

   console.log(Loader_spinner); 
   // Success message creation
   let success_creation = document.getElementById('success_section_creation');
   axios.post('http://localhost/Calculer_moyenne_institut/Action/Section_management.php'
   ,Data_CreationSection)
   .then(response =>{
    console.log(response.data);
    if(response.data == 'Empty Section identifiers'){
      Loader_spinner.classList.replace('hide','show');

      setTimeout(()=>{
        Loader_spinner.classList.replace('show','hide');
       empty_identifier.classList.replace('hide','show'); 
      },1200);
    }else{
      empty_identifier.classList.replace('show','hide');
    }

    if(response.data == 'Section created Successfuly'){
      success_creation.classList.replace('hide','show'); 
      Loader_spinner.classList.replace('hide','show');
      setTimeout(()=>{
        Loader_spinner.classList.replace('show','hide');
      navigate('/profile');
      },1400);
      
    }else{
      success_creation.classList.replace('show','hide'); 
    }

   });
}

   let Create_Section_Object=[
    {lab_01:'nom Section'},
    {lab_02:'identifient Section'},
    {lab_03:'nombre maximal de stagier ajouter'},
    {lab_04:'Choisir la Specialites de cette Section'},
    {Submition_sect:'Ouvrir Une nouvelle Section'}
   ];
   let error_handling_sectionCreaction = [
    {empty_identifiers:'Empty Section identifient'},
   ]; 
   let Success_handling_sectionCreation = [ 
    {Section_succ_creation:'Section Created Successfuly'}
   ]
  return( 
  <>
    <h1>Créer une nouvelle section</h1>

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
          {Create_Section_Object[0].lab_01}
        </label>
        <input type='text' className="manage_section_cr"  
        name='nom_sec' value={nom_sec} onChange={Change_Handler_Section}
        />
        
        <label htmlFor="">
          {Create_Section_Object[2].lab_03}
        </label>
        <input type="numbre" className="manage_section_cr" maxLength={2} 
        name='nom_max_stag' value={nom_max_stag} onChange={Change_Handler_Section}/>

        <label>
        {Create_Section_Object[3].lab_04}
        </label>
        <select className="Selection_specialties" name="spec_sec"
        value={spec_sec} 
        onChange={Change_Handler_Section}>
          <option>Specialites</option>
          <option>Développement WEB</option>
          <option>SON</option>
          <option>IMAGE</option>
          <option>REASEAU SISCO</option>
        </select>

         
      <div className="Submition_container">
        <button type='submit' className="submition_new_section"
        onClick={Creat_Section}
        >
          {Create_Section_Object[4].Submition_sect}
          <FcAdvance/>
        </button><br></br>
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
export default Create_section; 
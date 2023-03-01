import React from "react";
import { FcAdvance ,FcRight} from "react-icons/fc";

let Create_section = function(){
   let Create_Section_Object=[
    {lab_01:'nom Section'},
    {lab_02:'identifient Section'},
    {lab_03:'nombre maximal de stagier ajouter'},
    {lab_04:'Choisir la Specialites de cette Section'},
    {Submition_sect:'Ouvrir Une nouvelle Section'}
   ];
  return( 
  <>
    <h1>Creat une nouvelle section</h1>
    <div className="formule_management_sections_wrapp">
      <form className="form_manage_clipse">
        <label htmlFor="">
          {Create_Section_Object[0].lab_01}
        </label>
        <input type='text' className="manage_section_cr" 
        name='name_section' />

        <label htmlFor="">
          {Create_Section_Object[1].lab_02}
        </label>
        <input type='text'  className="manage_section_cr" maxLength={4}
        name='id_section'/>
        
        <label htmlFor="">
          {Create_Section_Object[2].lab_03}
        </label>
        <input type="numbre" className="manage_section_cr" maxLength={2} 
        name='max_stag_num'/>

        <label>
        {Create_Section_Object[3].lab_04}
        </label>
        <select className="Selection_specialties">
          <option>Specialites</option>
          <option>Développement WEB</option>
          <option>SON</option>
          <option>IMAGE</option>
          <option>REASEAU SISCO</option>
        </select>

         
      <div className="Submition_container">
        <button type='submit' className="submition_new_section">
          {Create_Section_Object[4].Submition_sect}
          <FcAdvance/>
        </button>
      </div>

      </form>
    </div>
  </>
  )
}
export default Create_section; 
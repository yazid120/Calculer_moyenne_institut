import React from "react";



let Delete_section = function(){
  let Delete_Section_Object=[
    {lab_01:'nom Section'},
    {lab_02:'identifient Section'},
    {lab_04:'Specialites de la Section'},
    {Supprime_sec:'Supprimer'}
  ]
  return( 
  <>
    <h1>Suppprimer une section</h1>
    <div className="formule_management_sections_wrapp">
      <form className="form_manage_clipse">
        <label htmlFor="">
          {Delete_Section_Object[0].lab_01}
        </label>
        <input type='text' className="manage_section_cr" 
        name='name_section' />

        <label>
        {Delete_Section_Object[2].lab_04}
        </label>
        <select className="Selection_specialties" name="spec_sec"
        // value={spec_sec} 
        // onChange={Change_Handler_Section}
        >
          <option>Specialites</option>
          <option>Développement WEB</option>
          <option>SON</option>
          <option>IMAGE</option>
          <option>REASEAU SISCO</option>
        </select>

      <div className="Submition_container">
        <button type='submit' className="submition_new_section _delete_section">
          {Delete_Section_Object[3].Supprime_sec}
          
        </button>
      </div>
      </form>
    </div>
    
  </>
  )
}
export default Delete_section; 
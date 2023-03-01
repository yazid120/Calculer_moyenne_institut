import React from "react";



let Delete_section = function(){
  let Delete_Section_Object=[
    {lab_01:'nom Section'},
    {lab_02:'identifient Section'},
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

        <label htmlFor="">
          {Delete_Section_Object[1].lab_02}
        </label>
        <input type='text'  className="manage_section_cr" maxLength={4}
        name='id_section'/>

      <div className="Submition_container">
        <button type='submit' className="submition_new_section _delete_section">
          {Delete_Section_Object[2].Supprime_sec}
          
        </button>
      </div>
      </form>
    </div>
    
  </>
  )
}
export default Delete_section; 
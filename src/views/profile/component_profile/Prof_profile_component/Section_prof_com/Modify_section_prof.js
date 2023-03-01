import React from "react";



let Modify_section = function(){
  let Modify_Section_Object=[
    {lab_01:'nom Section'},
    {lab_02:'identifient Section'},
    {lab_04:'Choisir la Specialites de cette Section'},
    {Modifier_sect:'Ouvrir la modification de cette section'}
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
        name='name_section' />

        <label htmlFor="">
          {Modify_Section_Object[1].lab_02}
        </label>
        <input type='text'  className="manage_section_cr" maxLength={4}
        name='id_section'/>

      <div className="Submition_container">
        <button type='submit' className="submition_new_section _Modify_section">
          {Modify_Section_Object[3].Modifier_sect}
        </button>
      </div>
      </form>
    </div>
    
  </>
  )
}
export default Modify_section; 
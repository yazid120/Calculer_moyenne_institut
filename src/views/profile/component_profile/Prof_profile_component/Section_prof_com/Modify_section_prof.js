import React, { useState } from "react";



let Modify_section = function(){
  const [ Data_section, Set_section] = useState({
    nom_sec:'',
    Spe_sec:''
  }); 



  let Modify_Section_Object=[
    {lab_01:'nom Section'},
    {lab_02:'identifient Section'},
    {lab_04:'Specialites de la Section'},
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

        <label>
        {Modify_Section_Object[3].lab_04}
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
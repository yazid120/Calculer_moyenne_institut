import React, {useContext} from 'react';
import axios from 'axios';


export default function Contact_us(){
    let Contact_Object = [
        {contact_us:'Contact us'},
        {f_name:'First name',f_class:'list_contact_ain'},
        {l_name:'Last name',l_class:'list_contact_ain'},
        {b_email:'Business or professionel Email',b_class:'list_contact_ain'},
        {message:'Tell us more about',message_class:'list_contact_ain mssg'}
    ]
    return( 
        <>
        <h1>{Contact_Object[0].contact_us}</h1>
    <form action='' className='' name='' method=''>
     <div>
        <label htmlFor=''>{Contact_Object[1].f_name}</label>
        <input type='text' />
        <label  htmlFor=''>{Contact_Object[2].l_name}</label>
        <input type='text' />
     </div>

        <label  htmlFor=''>{Contact_Object[3].b_email}</label>
        <input/>

        <label  htmlFor=''>{Contact_Object[4].message}</label>
        <textarea></textarea>
</form>
        </>
    )
}
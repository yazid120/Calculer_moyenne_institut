import { Link } from 'react-router-dom'; 

export default function Login(){
    return(
      <>
      <h1 className='heading_subtitle'>login page</h1>
      <form action='/' method='post' className='Registration_Format'>
       <label htmlFor='' className='label_subForm'>
       Email address:
       </label><br />
       <input type="email" name="" className='registration_input'/><br />
       <label htmlFor='' className='label_subForm'>
       password:
       </label><br />
       <input type="password" name="" className='registration_input'/><br />
       <button type="submit" name="" className="submition_Btn">
        login
       </button>
      </form>
      </>
    )
}
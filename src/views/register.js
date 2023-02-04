import { Link } from 'react-router-dom'; 
import '../style/register.css'

export default function Register(){
    return(
        <>
        <h1 className='heading_subtitle'>Register Page</h1>
        <form action='../Action/register.php' method='post'
        className='Registration_Format'>
         <label htmlFor='' className='label_subForm'>
            UserName:
         </label><br />
         <input type="text" name="" id="" 
         className='registration_input'/><br />
         <label htmlFor='' className='label_subForm'>
            Email address:
         </label><br />
         <input type="email" name="" id=""
         className='registration_input'/><br />
         <label htmlFor='' className='label_subForm'>
            password:
         </label><br />
         <input type="password" name="" id=""
         className='registration_input'/><br />
         <label htmlFor='' className='label_subForm'>
            repeate password:
         </label><br />
         <input type="password" name="repeact_password" id=""
         className='registration_input'/><br />
         <button type="submit" name="register" className='submition_Btn'>
            Register
         </button>
        </form> 
        </>
    )
}
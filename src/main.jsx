import React, {Component} from 'react'; 
import { useNavigate } from "react-router-dom";

class Main_Home extends Component{
    constructor(e){
        super(e)
        this.signup_redirect = this.signup_redirect.bind(); 
    }
    signup_redirect = () =>{
        window.location.href ='http://localhost:3000/register'; 
    }
    render(){
        return(
            <div className='sub_HeadCalc_top'>
                <h1 className='Head_titleBan'>Calculez les moyennes Insfp.</h1>
                <h2 className='head_subtitleBen'>
                    <p>Cette application est reserver au etuediant 
                        de l'institus audio visuelle Insfp
                    </p>
                    <p>inscris-toi gratuitement et commence a traker votre 
                        progress.
                    </p>
                </h2>
                <button className='inscription_side_subRedirection'
                onClick={this.signup_redirect}>
                    Commence..
                </button>
            </div>
        ); 
    }
}
export default Main_Home; 
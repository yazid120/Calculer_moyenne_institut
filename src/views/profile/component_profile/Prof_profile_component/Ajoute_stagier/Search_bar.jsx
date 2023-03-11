import React from "react";
import { useState } from "react"; 
import { FaSearch } from "react-icons/fa";

const Search_bar = ( {setResults} )=>{
const [Search_input, Set_search] = useState('');
// console.log(Search_input.length);

const Fetch_stagier =(value)=>{
    fetch('http://localhost/Calculer_moyenne_institut/Action/Section_management.php')
       .then((response)=>response.json())
       .then((json)=>{
           // console.log(json); 
           const result = json.filter((user)=>{
               return user && user.Nom && user.Nom.toLowerCase().includes(value)
           });
           let inputReaserchLength = value.length; 
           if(inputReaserchLength > 0){
            setResults(result); 
           }
           else
            setResults([]); 
           
       })
       
   }
   const HandleChange = (value)=>{
    Set_search(value);
    Fetch_stagier(value);   
   }

   return(
    <>
    <div className="input-wrapper">
     {/* <h1>recherche de stagier</h1> */}
          
    <FaSearch id="search_icon"/>
     <input type="text" placeholder="Rechercher un Stagier .."
    value={Search_input} onChange={(e)=>HandleChange(e.target.value)}/>
    </div>
    </>    
  
   )
}
export default Search_bar; 
import React, { useState } from "react"; 
import Search_bar from "./Search_bar";
import { SearchResultList } from "./Search_result_list";



let Ajouter_Stagier = function(){
    const [result, setResult]= useState({});
    return(
        <>
        <h1> ajouter nouveau stagier</h1>
    <div className="justice-container-add-intern">
        <Search_bar setResult={setResult}/>
        <SearchResultList result={result}/>
    </div>

        </>
    )
}
export default Ajouter_Stagier; 
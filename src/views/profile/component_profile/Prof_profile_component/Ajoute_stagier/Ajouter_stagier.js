import React, { useState } from "react"; 
import Search_bar from "./Search_bar";
import { SearchResultList } from "./Search_result_list";
import { List_Reaserch } from "./List_reaserch";
import '../../../../../style/Search_bar.css'; 



let Ajouter_Stagier = function(){
    const [results, setResults]= useState([]);
    return(
        <>
        <h1> ajouter nouveau stagier</h1>
    <div className="search-bar-container">
        <Search_bar setResults={setResults}/>
    {results  && results.length > 0 &&
     <SearchResultList results={results} />
    }
    </div>

    <div className="List_research_ndClassSection">
    <List_Reaserch/> 
    </div>
    {/*  */}
    </>
    )
}
export default Ajouter_Stagier; 
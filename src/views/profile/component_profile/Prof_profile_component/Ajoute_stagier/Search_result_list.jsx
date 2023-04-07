import React from "react";
import { useState } from "react";
import { SearchResult } from "./Search_result";

export const SearchResultList = ({ results })=>{
    console.log(results) 

    function student_list (props){
        const table_stud = props.data; 
        let list_stud = table_stud.map((index, key)=>
            <li key={key}>{index}</li>
            )
        return <li>{list_stud}</li>
    }

    return(
    <div className="search-result-list">
        <h2>list de recherche:</h2>
        {
            results.map((result, id)=>
            <SearchResult result={result} key={id}/>
            )
        }
    </div>
    )
}
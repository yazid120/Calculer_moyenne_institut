import React from "react";
import { useState } from "react";
import { SearchResult } from "./Search_result";

export const SearchResultList = ({ results })=>{
    return(
    <div className="search-result-list">list de recherche:
        {
            results.map((result, id)=>
            <SearchResult result={result} key={id}/>
            )
        }
    </div>
    )
}
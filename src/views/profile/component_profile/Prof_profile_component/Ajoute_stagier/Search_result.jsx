import React from "react";
import { useState } from "react";


export const SearchResult= ( {result} )=>{
   const [Stagier_Select, Set_Stagier_Select] = useState([]);

   return(
   <>
    <div className="search-result" onClick={() => Set_Stagier_Select(result)}>
      {result.Nom + ' '+ result.Prenom}
    </div>
   </>
   );
}

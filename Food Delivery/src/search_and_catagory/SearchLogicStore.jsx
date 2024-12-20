import { createContext, useState } from "react";

export const SearchLogicStore=createContext(null);

const SeachProvider=(props)=>{
    let [currentCatagory,setCurrentCatagory]=useState("All");
    const addCatagory=(value)=>{
        value===currentCatagory?setCurrentCatagory("All"):setCurrentCatagory(value);
       ;
    }
    let [searcValue,setSearchValue]=useState("")
    let addSeachValue=(i)=>{
        setSearchValue(i)
    }
    let finalStoreCatagoryValue={
        currentCatagory,
        addCatagory,
        addSeachValue,
        searcValue
    }
    return(
        <SearchLogicStore.Provider value={finalStoreCatagoryValue}>
            {props.children}
        </SearchLogicStore.Provider>
    )
}
export default SeachProvider;
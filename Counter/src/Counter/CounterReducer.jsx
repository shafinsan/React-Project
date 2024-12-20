import React from 'react'
const initialState={
    count:0
}
const CounterReducer=(state,action)=>{
    switch (action.type) {
        case "incriment":
            return {...state,count:state.count+1}
        case "decriment":
            return {...state,count:state.count-1}  
        default:
            return {...state,count:0}
    }
}
export{initialState,CounterReducer}
 

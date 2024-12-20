import React, { useEffect, useState } from 'react'

function FetchMeal(url) {
const [data,setData]=useState([])
useEffect(()=>{
    const fetching=async()=>{
        try {
            const res=await fetch(url);
            const meals=await res.json();
            setData(meals)
        } catch (error) {
            console.log("fetching error")
        }
    }
    fetching();
},[url])
  return [data]
}

export default FetchMeal

import React from 'react'
import Catagory from './Food/Food_Catagory/Catagory'
import FoodCard from './Food/Food_List/FoodCard'
import SeachProvider from './search_and_catagory/SearchLogicStore'
import Nav from './Food/Navigation/Nav'
function App() {
  return (
    <div>
      <SeachProvider>
        <Nav/>
        <Catagory />
        <FoodCard />
      </SeachProvider>
    </div>
  )
}

export default App

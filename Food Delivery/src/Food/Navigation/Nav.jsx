import React, { useContext} from 'react'
import { SearchLogicStore } from '../../search_and_catagory/SearchLogicStore';
import { CiSearch } from "react-icons/ci";
import './nav.css'

function Nav() {
    let { addSeachValue ,searcValue} = useContext(SearchLogicStore);
  return (
    <div className='my_nav'>
      <form action="">
        <input type="search" value={searcValue}  onChange={(e)=>addSeachValue(e.target.value)}/>
        <CiSearch  className='search_bar'/>
      </form>
    </div>
  )
}

export default Nav

import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import React from "react";
import "./Nav.css";
export default function Nav({inputClick,query}) {
  return (
    <>
      <nav>
        <div className="input">
          <input onChange={inputClick} value={query} type="text" placeholder="Search" className="input_style" />
        </div>
        <div className="icons">
          <a href="#">
            <FiHeart className="nav-icons" />
          </a>
          <a href="#">
            <AiOutlineShoppingCart className="nav-icons" />
          </a>
          <a href="#">
            <AiOutlineUserAdd className="nav-icons" />
          </a>
        </div>
      </nav>
    </>
  );
}

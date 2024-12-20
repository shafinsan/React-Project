import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import './nav.css'
export default function Nav({ onclickSearch, query }) {
  return (
    <div className="navigation">
      <input
        type="search"
        onChange={onclickSearch}
        value={query}
        placeholder="Search..."
      />
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
    </div>
  );
}

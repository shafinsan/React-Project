import React from "react";
import Color from "../Colors/Color";
import Catagory from "../Category/Catagory";
import Price from "../Price/Price";
import "./side.css";
export default function Side({ radio_selected }) {
  return (
    <div className="Container_side">
      <h1>🛒</h1>
      <div className="all_collection">
        <Catagory radio_selected={radio_selected} />
        <Price radio_selected={radio_selected} />
        <Color radio_selected={radio_selected} />
      </div>
    </div>
  );
}

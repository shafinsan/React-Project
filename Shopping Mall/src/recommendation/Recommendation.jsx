import React from "react";
import Btn from "../component/Btn";
import './btns.css'
export default function Recommendation({ button_select }) {
  return (
    <div className="btns">
      <Btn button_select={button_select} value="" title="All Products" />
      <Btn button_select={button_select} value="Nike" title="Nike" />
      <Btn button_select={button_select} value="Adidas" title="Adidas" />
      <Btn button_select={button_select} value="Puma" title="Puma" />
      <Btn button_select={button_select} value="Vans" title="Vans" />
    </div>
  );
}

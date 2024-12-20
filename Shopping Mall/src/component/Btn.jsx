import React from "react";
import "./btn.css";
export default function Btn({ button_select, value, title }) {
  return (
    <>
   
        <button onClick={button_select} value={value} title={title}>
          {title}
        </button>
    </>
  );
}

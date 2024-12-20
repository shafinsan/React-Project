import React from "react";
export default function Buttons({button_selected,value,title}) {
  return (
    <>
      <button
        className="btn"
        onClick={button_selected}
        value={value}
        title={title}
      >{title}</button>
    </>
  );
}

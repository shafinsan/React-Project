import React from "react";
import './label.css'
export default function Input({radio_select,value,title,name}) {
  return (
    <>
      <label>
        <input type="radio" onChange={radio_select} value={value} title={title} name={name} />
        {title}
      </label>
    </>
  );
}

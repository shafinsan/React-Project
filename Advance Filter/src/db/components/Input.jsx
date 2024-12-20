import React from "react";

export default function Input({ radio_selected, value, title, name, color }) {
  return (
    <>
      <label className="label">
        <input
          type="radio"
          onChange={radio_selected}
          value={value}
          name={name}
        />
        <span className="check" style={{ backgroundColor: color }}></span>{" "}
        {title}
      </label>
    </>
  );
}

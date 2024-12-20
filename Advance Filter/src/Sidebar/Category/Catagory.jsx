import React from "react";
import "./Catagory.css";
import Input from "../../db/components/Input";
export default function Catagory({ radio_selected }) {
  return (
    <div className="ccp_container">
      <div className="ccp">Category</div>
      <div className="all_label">
        <Input
          radio_selected={radio_selected}
          value=""
          title="All"
          name="test"
        />
        <Input
          radio_selected={radio_selected}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          radio_selected={radio_selected}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          radio_selected={radio_selected}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          radio_selected={radio_selected}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
}

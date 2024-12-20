import React from "react";
import Input from "../../db/components/Input";
export default function Color({ radio_selected }) {
  return (
    <div className="ccp_container">
      <div className="ccp">Color</div>
      <div className="all_label">
        <Input
          radio_selected={radio_selected}
          value=""
          title="All"
          name="test"
        />
        <Input
          radio_selected={radio_selected}
          value="black"
          title="Black"
          name="test"
        />
        <Input
          radio_selected={radio_selected}
          value="red"
          title="Red"
          name="test"
        />
        <Input
          radio_selected={radio_selected}
          value="green"
          title="Green"
          name="test"
        />
        <Input
          radio_selected={radio_selected}
          value="white"
          title="White"
          name="test"
        />
      </div>
    </div>
  );
}

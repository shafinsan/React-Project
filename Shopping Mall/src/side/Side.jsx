import React from "react";
import Input from "../component/Input";
import './side.css'
export default function Side({ radio_select }) {
  return (
    <div className="side">
      <div className="catagory">
        <p>Catagory</p>
        <Input radio_select={radio_select} value="" title="All" name="text" />
        <Input
          radio_select={radio_select}
          value="sneakers"
          title="Sneakers"
          name="text"
        />
        <Input
          radio_select={radio_select}
          value="flats"
          title="Flats"
          name="text"
        />
        <Input
          radio_select={radio_select}
          value="sandals"
          title="Sandals"
          name="text"
        />
        <Input
          radio_select={radio_select}
          value="heels"
          title="Heels"
          name="text"
        />
      </div>
      <div className="price">
        <p>Price</p>
        <Input radio_select={radio_select} value="" title="All" name="text" />
        <Input
          radio_select={radio_select}
          value="50"
          title="$0 - $50"
          name="text"
        />
        <Input
          radio_select={radio_select}
          value="100"
          title="$50 - $100"
          name="text"
        />
        <Input
          radio_select={radio_select}
          value="150"
          title="$100 - $150"
          name="text"
        />
        <Input
          radio_select={radio_select}
          value="200"
          title="above $200"
          name="text"
        />
      </div>
      <div className="color">
        <p>Color</p>
        <Input radio_select={radio_select} value="" title="All" name="text" />
        <Input
          radio_select={radio_select}
          value="black"
          title="Black"
          name="text"
        />
        <Input
          radio_select={radio_select}
          value="red"
          title="Red"
          name="text"
        />
        <Input
          radio_select={radio_select}
          value="green"
          title="Green"
          name="text"
        />
        <Input
          radio_select={radio_select}
          value="white"
          title="White"
          name="text"
        />
      </div>
    </div>
  );
}

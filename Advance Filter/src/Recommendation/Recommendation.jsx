import React from "react";
import "./Recommendation.css";
import Buttons from "../db/components/Buttons";
export default function Recommendation({ button_selected }) {
  return (
    <>
      <div className="recommendation">
        <div className="container">
          <h1>Recommended</h1>
          <div className="btns">
            <Buttons
              button_selected={button_selected}
              value=""
              title="All Products"
            />
            <Buttons
              className="btn"
              button_selected={button_selected}
              value="Nike"
              title="Nike"
            />
            <Buttons
              className="btn"
              button_selected={button_selected}
              value="Adidas"
              title="Adidas"
            />
            <Buttons
              className="btn"
              button_selected={button_selected}
              value="Puma"
              title="Puma"
            />
            <Buttons
              className="btn"
              button_selected={button_selected}
              value="Vans"
              title="Vans"
            />
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import data from "../ImageData/data";
import Carousal from "./Carousal" 
function CarousalApp() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="border-2 max-w-lg">
        <Carousal autoSlider={false} duration={3000}>
          {
            data.map((v, i) => <img key={i} src={v} alt="" />)
          }
        </Carousal>
      </div>
    </div>
  );
}

export default CarousalApp;

import React, { useState } from "react";


const white = {
  color: "#FFFFFF",
  textShadow:
    "2px 2px 0 #4074b5, 2px -2px 0 #4074b5, -2px 2px 0 #4074b5, -2px -2px 0 #4074b5, 2px 0px 0 #4074b5, 0px 2px 0 #4074b5, -2px 0px 0 #4074b5, 0px -2px 0 #4074b5",
};

const black = {
  color: "#000000",
  textShadow:
    "2px 2px 0 #4074b5, 2px -2px 0 #4074b5, -2px 2px 0 #4074b5, -2px -2px 0 #4074b5, 2px 0px 0 #4074b5, 0px 2px 0 #4074b5, -2px 0px 0 #4074b5, 0px -2px 0 #4074b5",
};

const gradientWhite = "linear-gradient(to right, #6078ea, #4313e6)";
const gradientBlack = "linear-gradient(to right, #2d3436, #636e72)";

function BackgroundColorChanger() {
  const [color, setColor] = useState("#FFFFFF");
  const [bg, setBg] = useState("#FFFFFF");
  const [flag, setFlag] = useState(true);

  const handleBg = () => {
    setColor(color === "#FFFFFF" ? "#000000" : "#FFFFFF");
    setBg(bg === "#FFFFFF" ? "#000000" : "#FFFFFF");
    setFlag(!flag);
  };

  return (
    <div
      className="w-screen h-screen flex justify-center items-center transition-all duration-500"
      style={{
        background: flag ? gradientWhite : gradientBlack, 
      }}
    >
      <div className="flex flex-col justify-around items-center space-y-5">
        <h1
          style={flag ? white : black}
          className="text-7xl font-extrabold text-center tracking-wider"
        >
          Hello World
        </h1>
        <button
          onClick={handleBg}
          className={
            flag
              ? "bg-black text-white p-4 w-48 rounded-lg shadow-xl transform transition-transform hover:bg-white hover:text-black hover:scale-105 duration-300"
              : "bg-white text-black p-4 w-48 rounded-lg shadow-xl transform transition-transform hover:bg-black hover:text-white hover:scale-105 duration-300"
          }
        >
          Change Colors
        </button>
      </div>
    </div>
  );
}

export default BackgroundColorChanger;

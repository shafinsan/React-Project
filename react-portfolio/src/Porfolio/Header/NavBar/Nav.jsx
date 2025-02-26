import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Nav() {
  const [active, setActive] = useState(false); // Initially false
  let list = ["Home", "About Me", "Resume", "Testimonial", "ContactMe"];
  const handleActive = () => {
    setActive(!active);
  };

  return (
    <div className="relative bg-[#1a1a4b] text-white">
      {/* Hamburger Menu */}
      <div className="absolute z-20 top-3 left-3 md:hidden">
        {active ? (
          <FaTimes onClick={handleActive} color="white" size={28} />
        ) : (
          <FaBars onClick={handleActive} color="white" size={28} />
        )}
      </div>

      {/* Navigation Menu */}
      <div
        className={`absolute left-0 z-10 ${
          active ? "top-0 opacity-100" : "-top-96 opacity-0"
        } duration-500 flex flex-col items-center justify-center space-y-6 md:space-y-0
        w-full h-96 md:h-auto md:flex-row
        md:flex md:static md:justify-around md:items-center p-2 bg-[#1a1a3b] text-white md:opacity-100`}
      >
        {/* Logo */}
        <div>
          <h1 className="font-mono text-2xl p-2 border-2 rounded-md">
            Elias CV
          </h1>
        </div>

        {/* Menu Items */}
        <div>
          <ul className="md:flex justify-between">
            {list.map((li, index) => (
              <li
                className="border-2 md:border-none border-orange-800 mt-2 p-1 rounded-md 
                active:scale-95 hover:translate-x-2 hover:scale-105 hover:text-orange-700 
                md:hover:translate-x-0 duration-300 md:mt-0 md:flex md:items-center font-mono mx-4"
                key={index}
              >
                <div className="pointer-events-none">{li}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


export default Nav;
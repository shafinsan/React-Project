import React, { useState, createContext } from "react";
import image from "./Images/logo.jpg";
import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";

export const valuepass = createContext();

function Sidebar({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <aside
      className={`h-screen duration-150 will-change-transform ${
        open ? "w-[9rem]" : "w-[3rem]"
      }`}
    >
      <nav className="h-full border-2 flex flex-col shadow-md">
        {/* Header Section */}
        <div className="flex justify-around items-center mt-5 h-[2rem]">
          <img
            src={image}
            alt="Logo"
            className={`duration-150 ${open ? `w-12` : `w-0`}`}
          />
          <button
            onClick={() => setOpen(!open)}
            className={`${open ? "mr-2" : "mr-0"} bg-gray-100 rounded-full border-2`}
          >
            {open ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        {/* Sidebar Content */}
        <valuepass.Provider value={{ open }}>
          <ul className="flex-1">{children}</ul>
        </valuepass.Provider>

        {/* Footer Section */}
        <div className="flex justify-between items-center h-[3rem]">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt="Avatar"
            className="ml-1 w-[2rem]"
          />
          <div
            className={`flex flex-col items-start leading-4 ml-1 ${
              open ? "" : "hidden"
            }`}
          >
            <div className="text-[10px]">Elias</div>
            <div className="text-[10px]">eliasjabershafin599</div>
          </div>
          {open && <MoreVertical size={20} />}
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;

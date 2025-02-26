import React, { createContext, useState } from "react";
import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import logo from "../../../Image/logo.png";
export const createValue = createContext();

function SideBar({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`${
        open ? "w-[90%]" : "w-[50%]"
      } duration-300 border border-gray-300 bg-white shadow-md h-[30rem] flex flex-col items-center justify-around`}
    >
      {/* Header */}
      <div className="flex border-b border-gray-300 w-full justify-between items-center px-3 py-2">
        <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
        <button
          onClick={() => setOpen(!open)}
          className="p-1 border border-gray-300 bg-gray-100 hover:bg-gray-200 rounded-full transition active:scale-95"
        >
          {!open ? <ChevronFirst size={20} /> : <ChevronLast size={20} />}
        </button>
      </div>

      {/* Body */}
      <createValue.Provider value={{ open }}>
        <ul className="flex-1 space-y-4 mt-6 mb-4">{children}</ul>
      </createValue.Provider>

      {/* Footer */}
      <div
        className={`mb-2 flex ${
          !open ? "justify-center" : "justify-between items-center px-3"
        } duration-300 w-full`}
      >
        <div className="">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt="Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
        {open && (
          <>
            <div className="ml-2 text-gray-600">
              <div className="name text-sm font-medium">Elias</div>
              <div className="text-xs font-light">eliasj@gmail.com</div>
            </div>
            <div className="treeDot">
              <MoreVertical size={20} className="text-gray-500" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SideBar;

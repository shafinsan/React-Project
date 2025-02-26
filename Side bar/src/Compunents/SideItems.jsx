import React, { useContext } from "react";
import { valuepass } from "./Sidebar";

function SideItems({ icon, text, active, alert }) {
  const { open } = useContext(valuepass);

  return (
    <div
      className={`relative h-[2rem] p-1 flex items-center space-x-3 mt-3 ml-1 mr-2 rounded-sm cursor-pointer will-change-transform hover:bg-green-500 duration-150 group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }`}
    >
      {/* Icon */}
      <li className="ml-1 text-lg">{icon}</li>

      {/* Text */}
      <span className={`${open ? "" : "hidden"}`}>{text}</span>

      {/* Alert Indicator */}
      {alert && (
        <div className="w-2 h-2 bg-indigo-800 rounded-full absolute -right-1 top-1 opacity-50" />
      )}

      {/* Tooltip */}
      {!open && (
        <div className="px-1 translate-x-2 opacity-0 group-hover:opacity-100 group-hover:bg-indigo-50 group-hover:rounded-sm">
          {text}
        </div>
      )}
    </div>
  );
}

export default SideItems;

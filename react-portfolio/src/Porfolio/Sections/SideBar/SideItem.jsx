import { useContext } from "react";
import { createValue } from "./SideBar";

function SideItem({ icon, text, alert, onclick, active }) {
  const { open } = useContext(createValue);

  return (
    <div
      onClick={onclick}
      className={`relative group 
          ${
            open
              ? "flex justify-between items-center w-[8rem] border border-gray-200 rounded-md px-3 py-2 hover:bg-blue-500"
              : "px-2 py-2 hover:bg-blue-100 rounded-md flex flex-col border border-gray-200 justify-center items-center hover:bg-blue-500"
          }
          ${active ? "bg-blue-500 text-white" : "bg-white text-gray-700"} 
          duration-200 cursor-pointer active:scale-95
        `}
    >
      {/* Icon */}
      <div className="flex justify-center items-center w-full h-full text-lg ">
        {icon}
      </div>

      {/* Text (when open) */}
      {open && <div className="ml-2 text-sm">{text}</div>}

      {/* Tooltip (when closed) */}
      {!open && (
        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-gray-800 text-white rounded shadow-lg opacity-0 group-hover:opacity-100 duration-200 text-xs">
          {text}
        </div>
      )}

      {/* Alert Indicator */}
      <div
        className={
          alert ? "w-2 h-2 bg-red-500 rounded-full absolute top-1 right-1" : ""
        }
      />
    </div>
  );
}

export default SideItem;

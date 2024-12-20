import React, { useState } from "react";
import { LANGUAGE_VERSIONS } from "./UtilityForCodeEditor/Constent";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useEditStore from "./EditorStore/EditorStore";

const data = Object.entries(LANGUAGE_VERSIONS);

function LaguageSelect() {
  const { currentLanguage,addLanguage,hoverBgColor, bgColor, textColor } = useEditStore(
    (state) => state
  );

  const handleLanguage = (language) => {
    addLanguage(language); 
  };

  return (
    <>
      <div className="mb-3 ml-1">
        <DropdownMenu>
          <DropdownMenuTrigger
            className={`mt-1 p-2 w-[9rem] ${bgColor} ${textColor} rounded hover:bg-gray-600 outline-none border-none`}
          >
            { currentLanguage || "Select Language"} 
          </DropdownMenuTrigger>
          <DropdownMenuContent className={`ml-3 ${bgColor} ${textColor} outline-none border-none`}>
            <DropdownMenuLabel>Language</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {data.map(([language, version], i) => (
              <DropdownMenuItem
                key={i}
                onClick={() => handleLanguage(language)} 
                className={`cursor-pointer hover:${hoverBgColor} ${
                  currentLanguage === language ? `${hoverBgColor}` : ""
                }`}
              >
                {language} (v{version})
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}

export default LaguageSelect;

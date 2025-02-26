import React from "react";
import FinalSideBar from "../SideBar/FinalSideBar";
import School from "./School";
import WorkHistory from "./WorkHistory";
import ProgrammingSkills from "./ProgrammingSkills";
import Projects from "./Projects";
import Interests from "./Interests";
import { useItemSelection } from "../../../Store/SideBarStore";

function Information() {
  const { currentSelection } = useItemSelection((state) => state);
  return (
    <div className="mt-20">
      <div className="flex flex-col justify-center items-center space-y-1 mb-10">
        <h1 className="text-3xl font-bold font-mono">Resume</h1>
        <div className="text-sm">My Formal Bio Details</div>
        <div>
          <div className="w-[10rem] h-1 bg-black relative">
            <span className="w-8 h-2 mt-1 bg-orange-600 rounded-full absolute left-1/2 top-[-6px] -translate-x-1/2"></span>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center md:static relative">
        <div className="w-[90%] flex justify-between items-center border-1 z-10 relative">
          <div className="w-[55%]">
            <FinalSideBar />
          </div>
          <div className="w-[65%] right-1 bottom-5 border-2 h-[25rem] overflow-y-auto absolute md:static md:-translate-x-36 -translate-x-0 -z-10">
            {currentSelection === 0 && <School />}
            {currentSelection === 1 && <WorkHistory />}
            {currentSelection === 2 && <ProgrammingSkills />}
            {currentSelection === 3 && <Projects />}
            {currentSelection === 4 && <Interests />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;

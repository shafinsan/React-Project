import React, { useEffect, useState } from "react";
import {
  IoSchool,
  IoTime,
  IoCodeSlash,
  IoHeart,
  IoFolderOpen,
} from "react-icons/io5";
import SideBar from "./SideBar";
import SideItem from "./SideItem";
import { useItemSelection } from "../../../Store/SideBarStore";
function FinalSideBar() {
  const [activeItem, setActiveItem] = useState(null);

  const { currentSelection, addNewSelection } = useItemSelection(
    (state) => state
  );
  useEffect(() => {
    addNewSelection(activeItem);
  }, [activeItem]);
  useEffect(()=>{
    addNewSelection(0);
  },[])
  const sideItemsData = [
    { icon: <IoSchool />, text: "Education", alert: false },
    { icon: <IoTime />, text: "History", alert: false },
    { icon: <IoCodeSlash />, text: "Programming Languages", alert: false },
    { icon: <IoFolderOpen />, text: "Projects", alert: false },
    { icon: <IoHeart />, text: "Interest", alert: false },
  ];
  return (
    <div className="w-[14rem]">
      <SideBar>
        {sideItemsData.map((item, index) => (
          <SideItem
            key={index}
            icon={item.icon}
            text={item.text}
            alert={item.alert}
            active={activeItem === index}
            onclick={() => setActiveItem(index)}
          />
        ))}
      </SideBar>
    </div>
  );
}

export default FinalSideBar;

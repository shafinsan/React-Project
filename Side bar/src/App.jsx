import React from "react";
import Sidebar from "./Compunents/Sidebar";
import SideItems from "./Compunents/SideItems";
import { IoHome, IoSettings, IoPerson, IoNotifications, IoLogOut } from "react-icons/io5";

function App() {
  const sideItemsData = [
    { icon: <IoHome />, text: "Home", active: true, alert: true },
    { icon: <IoSettings />, text: "Settings", active: false, alert: false },
    { icon: <IoPerson />, text: "Profile", active: false, alert: true },
    { icon: <IoNotifications />, text: "Notifications", active: false, alert: true },
    { icon: <IoLogOut />, text: "Logout", active: false, alert: false },
  ];

  return (
    <main>
      <Sidebar>
        <hr className="my-2" />
        {sideItemsData.map((item, index) => (
          <SideItems
            key={index}
            icon={item.icon}
            text={item.text}
            active={item.active}
            alert={item.alert}
          />
        ))}
        <hr className="my-2" />
      </Sidebar>
    </main>
  );
}

export default App;

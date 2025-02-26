import React from "react";
import Nav from "./NavBar/Nav";
import Profile from "./Profile/Profile";

function HeaderSeaction() {
  return (
    <div>
      <Nav />
      <Profile />
      <hr className="w-full bg-slate-600 h-1 md:translate-y-8 md:h-[1px] md:shadow-lg" />
    </div>
  );
}

export default HeaderSeaction;

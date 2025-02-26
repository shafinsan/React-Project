import React from "react";
import HeaderSeaction from "./Porfolio/Header/HeaderSeaction.jsx";
import Footer from "./Porfolio/Footer/Footer.jsx";
import AboutMe from "./Porfolio/Sections/AboutMe/AboutMe.jsx";
import Information from "./Porfolio/Sections/Information/Information.jsx";
import ProjectSection from "./Porfolio/Myproject/ProjectSection.jsx";

function App() {
  return (
    <div>
      <HeaderSeaction />
      <AboutMe />
      <Information />
      <ProjectSection />
      <Footer />
    </div>
  );
}

export default App;

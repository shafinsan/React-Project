import React from "react";
import About from "../../../Image/AboutMe.jpg";

const AboutMe = () => {
  return (
    <>
      <div className="mt-20">
        <div className="flex flex-col justify-center items-center space-y-1 mb-10">
          <h1 className="text-3xl font-bold font-mono">About Me</h1>
          <div className="text-sm">Why you choose Me</div>
          <div>
            <div className="w-[10rem] h-1 bg-black relative">
              <span className="w-8 h-2 mt-1 bg-orange-600 rounded-full absolute left-1/2 top-[-6px] -translate-x-1/2"></span>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between py-10 px-4 lg:px-8 bg-gray-100">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0 translate-y-9 md:translate-y-0">
            <img
              src={About}
              alt="Graduate"
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-2/4 lg:h-[30rem] rounded-full lg:rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <p className="text-gray-600 mb-6 text-center lg:text-left">
              Full stack web and mobile developer with background knowledge of
              MERN stacks with redux, along with a knack of building
              applications with utmost efficiency. Strong professional with a
              BSC willing to be an asset for an organization.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center lg:text-left">
              Here are a Few Highlights:
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 text-center lg:text-left">
              <li>Full Stack web and mobile development</li>
              <li>Interactive Front End as per the design</li>
              <li>React and React Native</li>
              <li>Redux for State Management</li>
              <li>Building REST API</li>
              <li>Managing database</li>
            </ul>

            <div className="flex mt-6 space-x-4 justify-center lg:justify-start">
              <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
                Hire Me
              </button>
              <button className="px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300">
                Get Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;

import React from "react";
import fiction from "../../Image/fiction.jpg";
import CardSlider from "../Slider/Slider";
function ProjectSection() {
  return (
    <>
      <div className="mt-20">
        <div className="flex flex-col justify-center items-center space-y-1 mb-10">
          <h1 className="text-3xl font-bold font-mono">Projects</h1>
          <div className="text-sm">My All Recent Projects</div>
          <div>
            <div className="w-[10rem] h-1 bg-black relative">
              <span className="w-8 h-2 mt-1 bg-orange-600 rounded-full absolute left-1/2 top-[-6px] -translate-x-1/2"></span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative w-full h-[25rem] mt-2 bg-no-repeat bg-center bg-cover border-hidden overflow-hidden"
        style={{ backgroundImage: `url(})` }}
      >
        <div className="translate-y-8">
          <CardSlider />
        </div>
        <div className="w-full h-8 absolute -bottom-2 md:bottom-0 lg:bottom-3 bg-transparent">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="bg-transparent"
          >
            <path
              d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
              className="fill-current text-white"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}

export default ProjectSection;

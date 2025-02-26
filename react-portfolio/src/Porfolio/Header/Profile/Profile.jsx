import React from "react";
import mkibria from "../../../Image/mkibria.jpg";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
function Profile() {
  const textArray = [
    "Welcome to my website!",
    "Enjoy your stay.",
    "Have a great day!",
  ];
  return (
    <div className="relative border-hidden bg-[#1a1a3b] text-white flex flex-col md:flex-row pb-6 md:pb-32 border-2 justify-around items-center md:space-y-20">
      <div className="flex flex-col justify-center items-center space-y-2 order-1 md:order-0 my-7 md:my-0">
        <div className="icon flex m-1 space-x-1">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-pink-500 hover:scale-110 transition-transform duration-300 text-md" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-blue-600 hover:scale-110 transition-transform duration-300 text-md" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="text-blue-700 hover:scale-110 transition-transform duration-300 text-md" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-sky-500 hover:scale-110 transition-transform duration-300 text-md" />
          </a>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGoogle className="text-red-500 hover:scale-110 transition-transform duration-300 text-md" />
          </a>
        </div>
        <div className="font-bold text-2xl font-mono">
          Hello,
          <span>Am Gk</span>
        </div>
        <div className="font-bold text-md font-mono text-center">
          <Typewriter
            words={textArray}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </div>
        <div className="font-mono text-center">
          Lorem ipsum doloramet consectetur adipisicing elit. Mollitia
        </div>
        <div className="button space-x-2">
          <button className="bg-orange-600 w-[7rem] h-[2rem] rounded-full text-white text-sm active:scale-95">
            Hire Me
          </button>
          <button className="bg-transparent border-2 w-[7rem] h-[2rem] rounded-full text-white text-sm active:scale-95">
            Get Resume
          </button>
        </div>
      </div>
      <div className="relative order-0 md:order-1 mt-16 md:mt-0">
        <div className="absolute top-2 shadow-xl md:w-[20rem] w-[15rem] h-[15rem] md:h-[20rem] border-b-4 border-white inline-block rounded-full space-y-6"></div>
        <div
          className="md:w-[20rem] w-[15rem] h-[15rem] md:h-[20rem] rounded-full"
          style={{
            backgroundImage: `url(${mkibria})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
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
  );
}

export default Profile;

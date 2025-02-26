import React from "react";
import EmailImage from "../../Image/email.jpg";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";
import Email from "./Email";
function Footer() {
  return (
    <div className="flex justify-center items-center">
      <div className="mt-16 my-2 w-[90%]">
        <div className="flex flex-col justify-center items-center space-y-1">
          <h1 className="text-3xl font-bold font-mono">Contact Me</h1>
          <div className="text-sm">Lets keep in touch</div>
          <div>
            <div className="w-[10rem] h-1 bg-black relative">
              <span className="w-8 h-2 mt-1 bg-orange-600 rounded-full absolute left-1/2 top-[-6px] -translate-x-1/2"></span>
            </div>
          </div>
        </div>

        <div className="bg-black relative mt-14 py-9 px-9 space-y-1 rounded-md">
          <div className="text-2xl font-mono text-white">
            Lets keep in touch
          </div>
          <div className="icon flex m-1 space-x-1">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white hover:scale-110 transition-transform duration-300 text-md" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-white hover:scale-110 transition-transform duration-300 text-md" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-white hover:scale-110 transition-transform duration-300 text-md" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-white hover:scale-110 transition-transform duration-300 text-md" />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogle className="text-white hover:scale-110 transition-transform duration-300 text-md" />
            </a>
          </div>
          <div className="space-y-1">
            <div className="text-slate-500 font-mono">
              Send Your Email Here!
            </div>
            <img
              src={EmailImage}
              className="w-[100%] p-[1px] h md:w-[50%] md:h-[15rem] rounded-lg md:p-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
              alt="Email"
            />
          </div>
          <div className="static md:absolute top-1/2 md:-translate-y-1/2 md:right-16 md:w-[26rem] translate-y-3 flex justify-center items-center w-[100%]">
            <Email />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

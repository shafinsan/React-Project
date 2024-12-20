import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import "./style.css";
export function Social() {
  let [nav_rotation, setRotation] = useState(false);
  useEffect(() => {
    let ul = document.querySelectorAll("ul");
    let ul_list = ul.forEach((li) => {
      li.addEventListener("mouseenter", () => {
        let high_light = document.querySelector(".high_light");
        let x = li.offsetLeft;
        let y = li.offsetTop;
        let w = li.offsetWidth;
        let h = li.offsetHeight;
        high_light.style.cssText = ` transform: translateX(${x}px) translateY(${y}px);
        width: ${w}px;
        height:${h}px;
        `;
        li.style.cssText = `color:black`;
      });
      li.addEventListener("mouseleave", () => {
        let high_light = document.querySelector(".high_light");
        let x = li.offsetLeft;
        let y = li.offsetTop;
        high_light.style.cssText = ` transform: translateX(${x}px) translateY(${y}px);
        width: ${0}px;
        height:${0}px;
        `;
        li.style.cssText = `color:white`;
      });
    });
    return () => ul_list;
  },[]);
  let [icon_value, setIcon] = useState(null);
  let [p_value,setValue]=useState("");
  useEffect(() => {
    const socialIcons = [
      <FaFacebook className="fa facebook-icon"/>,
      <FaInstagram className="fa instagram-icon"/>,
      <FaPinterest className="fa pinterest-icon"/>,
      <FaTwitter className="fa twitter-icon"/>,
      <FaWhatsapp className="fa whatsapp-icon"/>,
      <FaYoutube className="fa youtube-icon"/>,
    ];
    let ul = document.querySelectorAll("ul");
    let ul_list = ul.forEach((li) => {
      li.addEventListener("click", () => {
        let index = parseInt(li.firstChild.getAttribute("name"));
        let child_value=li.lastChild.textContent;
        index !== null ? setIcon(socialIcons[index]) : setIcon(null);
        index !== null ? setValue(child_value) : setIcon("");
      });
      return () => ul_list;
    });
  }, []);
 
  return (
    <>
      <header>
        <div className="container">
          <div className="icon">{icon_value}</div>
          <p>{p_value}</p>
          <div
            className={`nav ${nav_rotation ? "active" : ""}`}
            onClick={() => setRotation((nav_rotation) => !nav_rotation)}
          ></div>
        </div>
        <div className={`list_container ${!nav_rotation ? "active" : ""}`}>
          <ul>
            <li name="0">
              <FaFacebook alt="" className="fa facebook-icon" />
            </li>
            <li>Facebook</li>
          </ul>
          <ul>
            <li name="1">
              <FaInstagram alt="" className="fa instagram-icon" />
            </li>
            <li>Instagram</li>
          </ul>
          <ul>
            <li name="2">
              <FaPinterest alt="" className="fa pinterest-icon" />
            </li>
            <li>Pinterest</li>
          </ul>
          <ul>
            <li name="3">
              <FaTwitter alt="" className="fa twitter-icon" />
            </li>
            <li>Twitter</li>
          </ul>
          <ul>
            <li name="4">
              <FaWhatsapp alt="" className="fa whatsapp-icon" />
            </li>
            <li>Whatsapp</li>
          </ul>
          <ul>
            <li name="5">
              <FaYoutube alt="" className="fa youtube-icon" />
            </li>
            <li>Youtube</li>
          </ul>
          <div className="high_light"></div>
        </div>
      </header>
    </>
  );
}

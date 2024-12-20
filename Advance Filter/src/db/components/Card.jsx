import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
import "./card.css";
export default function Card({ img, title, reviews, prevPrice, newPrice }) {
  useEffect(()=>{
    function addActive() {
      let list = document.querySelectorAll(".ai");
      list.forEach((li) => {
          li.classList.add('active');
      });
    }
    addActive();
  })
  return (
    <>
      <div className="img_container">
        <img src={img} alt={title} />
        <div className="details">
          <h1>{title}</h1>
          <div className="star">
            <div className="icon">
              <span>
                <AiFillStar className="ai" />
              </span>
              <span>
                <AiFillStar className="ai" />
              </span>
              <span>
                <AiFillStar className="ai" />
              </span>
              <span>
                <AiFillStar className="ai" />
              </span>
            </div>
            <div className="reviews">
              <p>{reviews}</p>
            </div>
          </div>
          <div className="price_container">
            <div className="price">
              <del>{prevPrice}</del>
              <div className="real_price">{newPrice}</div>
            </div>
            <div className="packet">
              <BsFillBagHeartFill />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

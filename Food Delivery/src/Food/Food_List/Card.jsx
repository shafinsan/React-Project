import React from "react";
import './Card.css'
function Card({ _id, name, image, price, description, category }) {
  return (
    <div className="card">
      <img src={image} alt="" className="card-image" />
      <div className="card-details">
        <h2 className="card-name">{name}</h2>
        <p className="card-description">{description}</p>
        <div className="card-bottom">
          <p className="card-price">${price}</p>
          <p className="card-category">{category}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

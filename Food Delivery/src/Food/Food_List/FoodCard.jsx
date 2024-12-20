import React, { useContext } from "react";
import { food_list } from "../../assets/assets";
import "./FoodCard.css";
import Card from "./Card";
import { SearchLogicStore } from "../../search_and_catagory/SearchLogicStore";

function FoodCard() {
  let { currentCatagory, searcValue } = useContext(SearchLogicStore);
  return (
    <div className="Food_container">
      <div className="food_container_heading">
        <h1>Top Dishes Near You</h1>
      </div>
      <div className="card_container">
        {food_list
          .filter(
            ({ category, name }) =>
              (name
                .toLocaleLowerCase()
                .indexOf(searcValue.toLocaleLowerCase()) !== -1 &&
                currentCatagory === "All") ||
              currentCatagory === category
          )
          .map(({ _id, name, image, price, description, category }, i) => (
            <Card
              key={i}
              _id={_id}
              name={name}
              image={image}
              price={price}
              description={description}
              category={category}
            />
          ))}
      </div>
    </div>
  );
}

export default FoodCard;

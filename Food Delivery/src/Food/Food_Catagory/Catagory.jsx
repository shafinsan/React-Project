import React, { useContext } from "react";
import { menu_list } from "../../assets/assets";
import "./Catagory.css";
import { SearchLogicStore } from "../../search_and_catagory/SearchLogicStore";
function Catagory() {
  let { currentCatagory, addCatagory } = useContext(SearchLogicStore);
  let catagory = menu_list;
  return (
    <div className="Catagory_container">
      <div className="explore_container">
        <h1 className="exploreOurMenu">Explore Our Menu</h1>
        <p className="explore_description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
          reprehenderit repellendus veniam quos at saepe nam aspernatur fuga cum
          cumque dignissimos necessitatibus aliquid optio atque laboriosam
          officiis pariatur, tempore mollitia est in tempora? Est exercitationem
          cupiditate, reprehenderit quibusdam blanditiis eaque! Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Distinctio velit tempora
          ipsum laborum modi dolorem quae totam eaque, ad sed saepe, dicta
          ducimus quis! Fuga expedita eaque soluta provident sapiente molestiae
          fugiat eos optio ipsam natus! Deleniti saepe natus dolor non repellat
          autem beatae! Explicabo voluptatibus magnam eos assumenda. Quia
          laboriosam dignissimos sed quisquam vitae qui dolores numquam libero
          quaerat illum recusandae in facilis esse officia saepe, eligendi,
          molestias, dolor rem deserunt veniam eveniet nostrum? Nisi dolorum
          suscipit sint. Nisi, quae? Quo dolorem quidem accusantium tenetur
          officia exercitationem natus aperiam cum, ipsa nihil ex illo harum
          accusamus dicta saepe dolor?
        </p>
      </div>
      <div className="menu_container">
        {catagory.map(({ menu_name, menu_image }, i) => (
          <div
            key={i}
            className={`img_container ${
              currentCatagory === menu_name && currentCatagory !== "All"
                ? "active"
                : ""
            }`}
            onClick={() => addCatagory(menu_name)}
          >
            <img src={menu_image} alt="" />
            <p className="menu_name">{menu_name}</p>
          </div>
        ))}
      </div>
      <div className="underline_border">
        <span></span>
      </div>
    </div>
  );
}

export default Catagory;

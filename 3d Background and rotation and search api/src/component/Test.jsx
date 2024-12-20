import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import "./style_3d.css";

export default function Test() {
  let [search, setSearch] = useState("");
  let [value, setValue] = useState([]);
  let [nav, setNav] = useState(true);
  let [index, setIndex] = useState(0);
  function handleChange(event) {
    setSearch(event.target.value);
  }
  async function handleClick(event) {
    event.preventDefault();
    try {
      let data = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      let response = await data.json();
      console.log(response.meals);
      setValue(response.meals || []);
    } catch (error) {
      console.error("Got Error :", error);
      setValue([]);
    }
  }
  useEffect(() => {
    let all_active = document.querySelector(".img_container");
    if (nav) {
      all_active.classList.remove("active");
    } else {
      all_active.classList.add("active");
    }
  }, [index, nav]);

  return (
    <>
      {value.length > 0 && (
        <div className="nav_container">
          <div
            onClick={() => setNav((nav) => !nav)}
            className={nav ? "nav" : "nav active"}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}

      <div className={nav ? "fromContainer" : "fromContainer active"}>
        <form action="" onSubmit={handleClick}>
          <input type={search} onChange={handleChange} />
          <FaSearch className="fa" onClick={handleClick} />
        </form>
      </div>

      <div className="container_3d">
        <div className="img_container">
          {value.slice(0, 6).map((pic, i) => (
            <img
              className={index === i ? "show" : ""}
              src={pic.strMealThumb}
              alt=""
              key={i}
            />
          ))}
        </div>
      </div>

      {value.length > 0 && (
        <div className={`list ${!nav ? "active" : ""}`}>
          {value.slice(0, 6).map((food_nam, i) => (
            <ul key={i}>
              <li onClick={() => setIndex(i)}>{food_nam.strMeal}</li>
            </ul>
          ))}
        </div>
      )}
    </>
  );
}

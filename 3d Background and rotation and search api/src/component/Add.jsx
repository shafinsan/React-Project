import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./style.css";
import Test from "./Test";
export default function Add() {
  let [search, setSearch] = useState("");
  let [value, setValue] = useState([]);
  let [rotationPaused, setRotationPaused] = useState(false);
  let [default_value, setDefault] = useState(false);

  function handle_default() {
    let check_value = document.querySelector("#options option:checked").value;
    check_value === "Default" ? setDefault(false) : setDefault(true);
  }
  function handleChange(event) {
    setSearch(event.target.value);
  }

  async function handleClick(event) {
    event.preventDefault();
    try {
      let data = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
      );
      let response = await data.json();
      setValue(response.meals || []);
    } catch (error) {
      console.error("Got Error :", error);
      setValue([]);
    }
  }

  useEffect(() => {
    if (default_value) {
      setSearch("");
      document.querySelector("input").value = "";
      setValue([]);
    }
    if (!default_value) {
      let i = 0;
      let time;
      if (!rotationPaused) {
        time = setInterval(() => {
          let valueChanger = document.querySelector("section");
          valueChanger.style.transform = `perspective(1000px) rotateY(${i}deg)`;
          i++;
          i = i === 360 ? 0 : i;
          console.log(i);
        }, 30);
      }
      return () => clearInterval(time);
    }
  }, [rotationPaused, default_value]);

  const handleMouseEnter = () => {
    setRotationPaused(true);
  };

  const handleMouseLeave = () => {
    setRotationPaused(false);
  };
  return (
    <>
      <div className="fromContainer">
        <form action="" onSubmit={handleClick}>
          <input type={search} onChange={handleChange} />
          <FaSearch className="fa" onClick={handleClick} />
        </form>
      </div>
      {!default_value ? (
        <div className="position_selector">
          <section
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {value.map((meal, index) => (
              <div
                className="Myrotation"
                key={index}
                style={{ "--i": index + 1 }}
              >
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <p>{meal.strMeal}</p>
              </div>
            ))}
          </section>
        </div>
      ) : (
        <>
          <Test />
        </>
      )}
      <div className="button">
        <select id="options" name="options">
          <option value="Default">Default</option>
          <option value="3d_Navbar">3d Navbar</option>
        </select>
        <button onClick={handle_default}>Click</button>
      </div>
    </>
  );
}

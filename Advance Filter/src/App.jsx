import { useState } from "react";
import Nav from "./Navigation/Nav";
import Product from "./Products/Product";
import Recommentation from "./Recommendation/Recommendation";
import Side from "./Sidebar/side/Side";
import data from "./db/data";
import Card from "./db/components/Card";
function App() {
  let [query, setQuery] = useState("");
  let [select, setSelected] = useState("");
  let inputClick = (event) => setQuery(event.target.value);
  let radio_selected = (event) => setSelected(event.target.value);
  let button_selected = (event) => setSelected(event.target.value);
  let filter_product = data.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );
  function filter(data, select, query) {
    let filter_result = data;
    if (query) {
      filter_result = filter_product;
    }
    if (select) {
      filter_result = filter_result.filter(
        ({ title, newPrice, color, category, company }) => company === select
      );
      console.log(filter_result);
      console.log("you select: ", select);
    }
    return filter_result.map(
      ({ img, title, reviews, prevPrice, newPrice }, i) => (
        <>
          <Card
            key={i}
            img={img}
            title={title}
            reviews={reviews}
            prevPrice={prevPrice}
            newPrice={newPrice}
          />
        </>
      )
    );
  }
  let result = filter(data, select, query);
  return (
    <>
      <Side radio_selected={radio_selected} />
      <Nav inputClick={inputClick} query={query} />
      <Recommentation button_selected={button_selected} />
      <Product result={result} />
    </>
  );
}

export default App;

import Recommendation from "./recommendation/Recommendation";
import Nav from "./navigation/Nav";
import Side from "./side/Side";
import Product from "./products/Product";
import { useState } from "react";
import data from "./data/data";
import Card from "./component/Card";
function App() {
  let [query, setQuery] = useState("");
  let [select, setSelect] = useState("");
  let onclickSearch = (event) => setQuery(event.target.value);
  let button_select = (event) => setSelect(event.target.value);
  let radio_select = (event) => setSelect(event.target.value);
  let filter_value = data.filter(
    (d) => d.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );
  function filter(data, select) {
    let fileter_data = data;
    if (query) {
      fileter_data = filter_value;
    }
    if (select) {
      fileter_data = data.filter(
        ({ title, prevPrice, newPrice, company, color, category }) =>
          title === select ||
          category === select ||
          company === select ||
          newPrice === select ||
          prevPrice === select ||
          color === select ||
          select === ""
      );
    }
    return fileter_data.map(
      ({ img, title, reviews, prevPrice, newPrice }, i) => (
        <Card
          key={i}
          img={img}
          title={title}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }
  let result = filter(data, select);
  return (
    <>
      <Nav onclickSearch={onclickSearch} query={query} />
      <Recommendation button_select={button_select} />
      <Side radio_select={radio_select} />
      <Product result={result} />
    </>
  );
}

export default App;

import React from "react";
import "./Product.css";
export default function Product({result}) {
  return (
    <>
      <section className="Container" key={Math.random()}>
        {result}
      </section>
    </>
  );
}

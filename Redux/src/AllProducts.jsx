import React from "react";
import { useGetProductQuery } from "./App/Api/dataFetching";

export default function AllProducts() {
  let { data, isError, isLoading } = useGetProductQuery();
  if (isLoading) {
    return (
      <>
        <p>Loading.....</p>
      </>
    );
  }
  if (isError) {
    return (
      <>
        <p>Something Error</p>
      </>
    );
  }
  return (
    <>
      {data?.products.map((value, index) => (
        <div key={index}>{value.title}</div>
      ))}
    </>
  );
}

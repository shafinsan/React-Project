import React, { useEffect } from "react";
import { useAddNewProductMutation } from "./App/Api/dataFetching";

export default function AddProducts() {
  let [addNewProduct, { isError, isLoading, data }] =
    useAddNewProductMutation();
  useEffect(() => {
    async function add() {
      try {
        const product = {
          id: 1,
          title: "This is New Product Title",
        };
        await addNewProduct(product);
      } catch (error) {
        console.log(error);
      }
    }
    add();
  }, [addNewProduct]);
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
      <p>{data?.id}</p>
      <p>{data?.title}</p>
    </>
  );
}

import React from "react";
import { useUpdateProductMutation } from "./App/Api/dataFetching";
import { useEffect } from "react";
export default function Update() {
  let [updateProduct, { data,isError, isLoading}] =
    useUpdateProductMutation();
  useEffect(() => {
    async function add() {
      try {
        await updateProduct({
          id: 2,
          updatedProduct: {
            title: "This is updated",
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
    add();
  }, [updateProduct]);
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
  console.log(data);
  return (
    <>
      <p>{data?.id}</p>
      <p>{data?.title}</p>
    </>
  );
}

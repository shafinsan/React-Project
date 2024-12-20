import React from 'react'
import { useEffect } from 'react';
import { useDeleteProductMutation } from './App/Api/dataFetching';
export default function DeleteMyProduct() {
    let [deleteProduct, {data ,isError, isLoading }] =
    useDeleteProductMutation();
  useEffect(() => {
    async function add() {
      try {
        await deleteProduct(8);
      } catch (error) {
        console.log(error);
      }
    }
    add();
  }, [deleteProduct]);
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
      <p>{data?.title?`${data.title} delete successfully`:""}</p>
    </>
  );
}

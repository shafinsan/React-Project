import React from 'react'
import { useGetProductByIdQuery } from './App/Api/dataFetching';
export default function GetOneProductById() {
    let { data, isError, isLoading } = useGetProductByIdQuery(9);
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
      <div>{data?.title}</div>
        
      </>
    );
}

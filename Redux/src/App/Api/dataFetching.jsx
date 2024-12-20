import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => "/products",
    }),
    getProductById: builder.query({
      query: (id) => `./products/${id}`,
    }),
    addNewProduct: builder.mutation({
      query: (addProduct) => ({
        url: "/product/add",
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: addProduct,
      }),
    }),

    updateProduct: builder.mutation({
        query: ({id,updatedProduct}) => ({
          url: `/products/${id}`,
          headers: { "Content-Type": "application/json" },
          method: "PUT",
          body: updatedProduct,
        }),
      }),
      deleteProduct: builder.mutation({
        query: (id) => ({
          url: `/products/${id}`,
          method: "DELETE",
        }),
      }),
  }),
});
export const { useGetProductQuery, useGetProductByIdQuery,useAddNewProductMutation,useUpdateProductMutation,useDeleteProductMutation } = productApi;

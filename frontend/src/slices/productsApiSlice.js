// this file is to inject the endpoint to apiSlice.js file
import { PRODUCTS_URL } from "../constants";
import { apiSlice } from './apiSlice';

const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5, // FOR CACHING
    }),

    getProductDetails: builder.query({
      query: (productId) =>({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5
    })
  }),
});

export const { useGetProductsQuery, useGetProductDetailsQuery } = productsApiSlice;

// convension is use--queryname--query OR use-mutationname--mutation OR ......
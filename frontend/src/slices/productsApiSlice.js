// this file is to inject the endpoint to apiSlice.js file
import { PRODUCTS_URL } from "../constants";
import { apiSlice } from './apiSlice';

const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: '/api/products',
      }),
      keepUnusedDataFor: 5, // FOR CACHING
    }),
  }),
});

export const { useGetProductsQuery } = productsApiSlice;

// convension is use--queryname--query OR use-mutationname--mutation OR ......
import { PRODUCT_URL } from "../constant";
import { apiSlice } from "./apiSlice";

const productSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCT_URL,
      }),
      keepUnusedDataFor: 10, // // time that remians the loaded data in the cache (standard: 60s). So, that loaded data will not load in the time frame if clicked again.
    }),
    getProductById: builder.query({
      query: (id) => ({
        url: `${PRODUCT_URL}/${id}`,
      }),
      keepUnusedDataFor: 10,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productSlice;

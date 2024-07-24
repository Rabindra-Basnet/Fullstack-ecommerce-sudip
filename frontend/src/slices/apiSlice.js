// // We use this slice to call prodcuts and user api (or order api).

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constant";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  // // Creating api slice.
  baseQuery,
  tagTypes: ["Product", "User", "Order"], // // Used for caching the data so that in future data need not have to be reloaded.
  endpoints: (builder) => ({}),
});

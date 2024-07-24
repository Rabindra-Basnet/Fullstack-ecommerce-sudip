import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import { apiSlice } from "./slices/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartReducer,
  },
  // // while handling the api error as it occurs asynchronously we may need thunk. Therefore we created middleware here.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

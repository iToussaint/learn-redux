import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./../features/counter/counter.slice";
import { productsApi } from "../features/products";

const store = configureStore({
  reducer: {
    counter: counterReducer,

    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;

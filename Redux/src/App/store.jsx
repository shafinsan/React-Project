import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Slice/counterSlice'
import { productApi } from "./Api/dataFetching";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    count: counterReducer,
    [productApi.reducerPath]:productApi.reducer,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(productApi.middleware)
});
setupListeners(store.dispatch);
import { configureStore } from "@reduxjs/toolkit";
import { booksApi } from "./api/bookCreateAPI";
import { borrowBookAPI } from "./api/borrowBookAPI";

export const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    [borrowBookAPI.reducerPath]: borrowBookAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      booksApi.middleware,
      borrowBookAPI.middleware
    );
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

"use client";

import { configureStore } from "@reduxjs/toolkit";
import dialogContentReducer from "./features/dialog-conent/dialogContentSlice";
import langReducer from "./features/lang/langSlice";
// ...

export const makeStore = () => {
  return configureStore({
    reducer: {
      dialogContent: dialogContentReducer,
      lang: langReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

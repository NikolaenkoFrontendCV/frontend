"use client";

import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";

// Define a type for the slice state
interface LangState {
  value: "RU" | "EN";
}

// Define the initial state using that type
const initialState: LangState = {
  value: "RU",
};

export const langSlice = createSlice({
  name: "lang",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.value = action.payload.value;
    },
  },
});

export const { changeLanguage } = langSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectLang = (state: RootState) => state.lang;

export default langSlice.reducer;

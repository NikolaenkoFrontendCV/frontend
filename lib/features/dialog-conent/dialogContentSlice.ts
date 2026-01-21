"use client";

import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";

// Define a type for the slice state
interface DialogContentState {
  type: "" | "experience" | "cases";
  itemId: number;
  isOpen?: boolean;
}

// Define the initial state using that type
const initialState: DialogContentState = {
  type: "",
  itemId: -1,
  isOpen: false,
};

export const dialogContentSlice = createSlice({
  name: "dialogContent",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setDialogContent: (state, action) => {
      state.isOpen = true;
      state.type = action.payload.type;
      state.itemId = action.payload.itemId;
    },
    closeDialog: (state) => {
      state.isOpen = false;
    },
  },
});

export const { setDialogContent } = dialogContentSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectDialogContent = (state: RootState) => state.dialogContent;

export default dialogContentSlice.reducer;

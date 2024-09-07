import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayPreloader: false,
};

const PreloaderSlice = createSlice({
  name: "preloader",

  initialState,

  reducers: {
    openPreloader(state) {
      state.displayPreloader = true;
    },

    closePreloader(state) {
      state.displayPreloader = false;
    },
  },
});

export const { openPreloader, closePreloader } = PreloaderSlice.actions;

export default PreloaderSlice;

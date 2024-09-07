import { createSlice } from "@reduxjs/toolkit";
import PreloaderSlice from "./PreloaderSlice";

const initialState = {
  displaySearchModal: false,

  results: [],
};

const SearchSlice = createSlice({
  name: "search",

  initialState,

  reducers: {
    openSearchModal: (state, action) => {
      state.data = action.payload;

      state.displaySearchModal = true;
    },

    closeSearchModal: (state) => {
      state.displaySearchModal = false;

      state.data = null;
    },

    setSearchResults: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { openSearchModal, closeSearchModal, setSearchResults } =
  SearchSlice.actions;

export default SearchSlice;

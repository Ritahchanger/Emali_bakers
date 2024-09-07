import { createSlice } from "@reduxjs/toolkit";
import PreloaderSlice from "./PreloaderSlice";


const initialState = {

    displaySearchModal:false,

    data:null,

}

const SearchSlice = createSlice({

    name:"search",

    initialState,

    reducers:{

        openSearchModal(state,action){

            state.data = action.payload;

            state.displaySearchModal = true;

        },

        closeSearchModal(state){

            state.displaySearchModal = false;

            state.data = null

        }

    }


})

export const { openSearchModal,closeSearchModal } = SearchSlice.actions;

export default SearchSlice;
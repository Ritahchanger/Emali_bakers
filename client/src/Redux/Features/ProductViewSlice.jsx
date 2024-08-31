import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    displayProductViewModal:false,

    data:null,

}

const ProductViewSlice = createSlice({

    name:"productView",

    initialState,

    reducers:{


        openProductViewModal(state,action){

            state.data = action.payload;

            state.displayProductViewModal = true;

        },

        closeProductViewModal(state){

            state.data = null

            state.displayProductViewModal = false;

        }

    }

})


export const { openProductViewModal,closeProductViewModal } = ProductViewSlice.actions;


export default ProductViewSlice
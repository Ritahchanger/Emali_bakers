import { configureStore } from "@reduxjs/toolkit"



import ProductViewSlice from "./ProductViewSlice"


export default configureStore({

    reducer:{

        productView:ProductViewSlice.reducer

    },

})
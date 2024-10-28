import { configureStore } from "@reduxjs/toolkit"



import ProductViewSlice from "./ProductViewSlice"

import PreloaderSlice from "./PreloaderSlice"


import SearchSlice  from "./SearchSlice"

import AdminSidebarSlice from "./AdminSidebarSlice"


import productsSlice from "./ProductsSlice"

import editModalSlice from "./EditModalSlice"


export default configureStore({

    reducer:{

        productView:ProductViewSlice.reducer,

        preloader:PreloaderSlice.reducer,

        search:SearchSlice.reducer,

        adminSidebar:AdminSidebarSlice.reducer,

        adminSidebar:AdminSidebarSlice.reducer,

        products:productsSlice.reducer,

        editModal:editModalSlice.reducer

    },

})
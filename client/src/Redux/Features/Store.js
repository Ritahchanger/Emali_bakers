import { configureStore } from "@reduxjs/toolkit"



import ProductViewSlice from "./ProductViewSlice"

import PreloaderSlice from "./PreloaderSlice"


import SearchSlice  from "./SearchSlice"

import AdminSidebarSlice from "./AdminSidebarSlice"


export default configureStore({

    reducer:{

        productView:ProductViewSlice.reducer,


        preloader:PreloaderSlice.reducer,

        search:SearchSlice.reducer,

        adminSidebar:AdminSidebarSlice.reducer


    },

})
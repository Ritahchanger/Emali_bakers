import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displaySidebar: false,
};


const AdminSidebarSlice = createSlice({

    name:"adminSidebar",

    initialState,

    reducers:{

        openSideBar(state){

            state.displaySidebar = true

        },

        closeOpenSidebar(state){

            state.displaySidebar = false

        },

        toggleSidebar(state){

            state.displaySidebar = !state.displaySidebar;
        }

    }


})


export const { openSideBar,toggleSidebar,closeOpenSidebar } = AdminSidebarSlice.actions;




export default AdminSidebarSlice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    editModalShown:false,

    data:null

}


const editModalSlice = createSlice({

    name:"editModal",

    initialState,

    reducers:{

        openEditModal:(state,action)=>{

            state.data = action.payload;

            state.editModalShown = true;

        },
        closeEditModal:(state,action)=>{

            state.data = null ;

            state.editModalShown = false;

        },

    }

})




export const { openEditModal,closeEditModal  } = editModalSlice.reducer


export default editModalSlice
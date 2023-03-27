import { configureStore } from "@reduxjs/toolkit";
import racerSlice from "./state";

const store = configureStore({

    reducer :{
racer : racerSlice.reducer
    }
})

export default store;
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducer/counterReducer";

export const store=configureStore({
    reducer:{
        counter:counterSlice.reducer
    }
})
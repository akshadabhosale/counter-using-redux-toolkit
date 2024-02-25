import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counter",
    initialState:0,
    reducers:{
        increment:(state,action)=>{

           return state+=1
        },
        decrement:(state,action)=>{
            return state-=1
        },
        incrementByAmt:(state,action)=>{
           return state+=action.payload
        }
    }})

export default counterSlice;

export const {increment,decrement,incrementByAmt}=counterSlice.actions;

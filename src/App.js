import React,{useReducer,useState} from "react";
import { Provider, useSelector } from "react-redux";
import {store} from "./store";
import { UseSelector,useDispatch } from "react-redux";
import { increment,decrement,incrementByAmt } from "./store/reducer/counterReducer";







export default function App(){
    // const [counter,setCounter]=useState(0);
    const [valueToAdd,setValueToAdd]=useState("")
    const dispatch=useDispatch();
    const counter=useSelector((state)=>{
        return state.counter
    })
 



    const Increment=()=>{
        dispatch(increment())
    }

    const Decrement=()=>{
        dispatch(decrement())
    }

    const handleChange=(event)=>{
        setValueToAdd(parseInt(event.target.value) || 0)
    }

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        dispatch(incrementByAmt(valueToAdd))

        // dispatch({type:ADD_VALUE})
      
    }

    const formEl=
        <form onSubmit={handleFormSubmit} className="mt-2 d-flex flex-column">
        <label>Add value to counter</label>
        <input type="number" value={valueToAdd} onChange={handleChange} className="m-1"/>
        <button type="submit" class="btn btn-primary m-1 " style={{width:'200px'}}  >Add Value</button>

    </form>
    


    return <div className="container align-items-center">
        <h2 className="m-3">Counter Example</h2>
        <p>Current count is {counter}</p>
        <div className="flex w-100" style={{gap:'10px'}}>
        <button type="button" class="btn btn-success" onClick={Increment}>Increment</button>
        <button type="button" class="btn btn-secondary ms-3" onClick={Decrement}>Decrement</button>

        </div>
      {formEl}

    </div>
}
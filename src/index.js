import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider, useSelector } from "react-redux";
import {store} from "./store";
const el=document.getElementById("root");
const root=ReactDOM.createRoot(el);

root.render(<Provider store={store}><App/></Provider>)
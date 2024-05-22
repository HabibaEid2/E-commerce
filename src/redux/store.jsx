import { applyMiddleware, configureStore  } from "@reduxjs/toolkit";
import {bestSells, cartList, productsData} from "./reducer";
import { thunk } from "redux-thunk";

export const store = configureStore({
    reducer : {
        productsData : productsData.reducer , 
        bestSells : bestSells.reducer , 
        cartList : cartList.reducer , 
    } ,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
} , applyMiddleware(thunk))
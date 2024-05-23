import { applyMiddleware, configureStore  } from "@reduxjs/toolkit";
import {bestSells, cartList, productsData, wishList} from "./reducer";
import { thunk } from "redux-thunk";

export const store = configureStore({
    reducer : {
        productsData : productsData.reducer , 
        bestSells : bestSells.reducer , 
        cartList : cartList.reducer , 
        wishList : wishList.reducer , 
    } ,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
} , applyMiddleware(thunk))
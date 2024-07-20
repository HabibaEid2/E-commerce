import { applyMiddleware, configureStore  } from "@reduxjs/toolkit";
import {favList, bestSells, cartList, listsOfProducts} from "./reducer";
import { thunk } from "redux-thunk";

export const store = configureStore({
    reducer : {
        listsOfProducts : listsOfProducts.reducer , 
        bestSells : bestSells.reducer , 
        cartList : cartList.reducer , 
        favList : favList.reducer , 
    } ,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
} , applyMiddleware(thunk))
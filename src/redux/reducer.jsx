import { createSlice } from "@reduxjs/toolkit"
import {bestSellsA,  dalsApulses,gheeAoils, masalas_spices, menWW, mobilesAT, rice_products, tvASpeaker, womenWW } from "./actions"
export const productsData = createSlice({
    name : "productsData" , 
    initialState : dalsApulses, 
    reducers : {
        dalsApulsesF : () => {
            return {
                type : dalsApulses
            }
        } , 
        gheeAoilsF : () => {
            return {
                type : gheeAoils , 
            }
        } , 
        masalas_spicesF :() => {
            return {
                type : masalas_spices , 
            }
        } , 
        menWWF : () => {
            return {
                type : menWW , 
            }
        } , 
        womenWWF : () => {
            return {
                type : womenWW , 
            }
        } , 
        mobilesATF : () => {
            return {
                type : mobilesAT , 
            }
        } , 
        rice_productsF : () => {
            return {
                type : rice_products , 
            }
        } ,  
        tvASpeakerF : () => {
            return {
                type : tvASpeaker , 
            }
        } ,  
        
    } 
})

export const bestSells = createSlice({
    name : "bestSells" , 
    initialState : [] , 
    reducers : {
        bestSellsF : () => {
            return {
                type : bestSellsA , 
            }
        } 
    }
})

export const cartList = createSlice({
    name : "cart" , 
    initialState : [] , 
    reducers : {
        addToCartA : (state , action) => {
            state.push(action.payload) ;   
            return state ; 
        } , 
        removeFromCartA : (state , action) => {
            state.splice(action.payload , 1) ; 
            return state ;  
        }
    }
})

export const wishList = createSlice({
    name : "wish list" , 
    initialState : [] ,
    reducers : {
        addToWishList : (state , action) => {
            state.push(action.payload) ; 
            return state ; 
        } , 
        removeFromWishList : (state , action) => {
            state.splice(action.payload , 1) ; 
            return state ; 
        }
    }
})
export let {dalsApulsesF , gheeAoilsF  ,masalas_spicesF , menWWF , womenWWF , mobilesATF , rice_productsF , tvASpeakerF} = productsData.actions ;
export let {bestSellsF} = bestSells.actions ;
export let {addToCartA , removeFromCartA} = cartList.actions ; 
export let {addToWishList , removeFromWishList} = wishList.actions ; 
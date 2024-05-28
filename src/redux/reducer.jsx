import { createSlice } from "@reduxjs/toolkit"
import {bestSellsA,  dalsApulses } from "./actions"
import data from "../data/data"
import ProductCard from "../components/card/ProductCard";
export const productsData = createSlice({
    name : [] , 
    initialState : dalsApulses, 
    reducers : {
        productsInHomeA : (state , action) => {
            let index = data.productData.findIndex(ele => ele.cat_name === action.payload.catName) ; 
            let subCat = action.payload.subCat ; 
            state = [] ; 
            for(let i of data.productData[index].items) {
                if(i.cat_name === subCat || subCat === "all") {
                    for(let j of i.products) {
                        state.push(
                        <ProductCard key = {j.id} description = {j.description}
                            productName = {j.productName}
                            id = {j.id}
                            catImg = {j.catImg}  
                            title = {`${j.productName.slice(0,30)}...`}
                            rating = {j.rating}
                            brand = {j.brand}
                            price = {j.price}
                            oldPrice = {j.oldPrice}
                            />)
                        }
                    }
            }
            return state ; 
        } , 
        mainCatsA : (state , action) => {
            state = [] ; 
            let index = data.productData.findIndex(ele => ele.cat_name === action.payload.type) ; 
            for(let i of data.productData[index].items) {
                for(let j of i.products) {
                    state.push(
                        <ProductCard key = {j.id} description = {j.description}
                            productName = {j.productName}
                            id = {j.id}
                            catImg = {j.catImg}  
                            title = {`${j.productName.slice(0,30)}...`}
                            rating = {j.rating}
                            brand = {j.brand}
                            price = {j.price}
                            oldPrice = {j.oldPrice}
                    />) ; 
                }
            }
            return state ; 
        }
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

export const favList = createSlice({
    name : "fav_list" , 
    initialState : [] ,
    reducers : {
        addToFavListA : (state , action) => {
            state.push(action.payload) ; 
            return state ; 
        } , 
        removeFromFavListA : (state , action) => {
            state.splice(action.payload , 1) ; 
            return state ; 
        }
    }
})
export let {productsInHomeA , mainCatsA} = productsData.actions ; 
export let {bestSellsF} = bestSells.actions ;
export let {addToCartA , removeFromCartA} = cartList.actions ; 
export let {addToFavListA , removeFromFavListA} = favList.actions ; 
import data from "../data/data";
import ProductCard from "../components/card/ProductCard";
let dalsApulsesArr = [] ; 
for(let i of data.productData[0].items) {
    if(i.cat_name === "dals and pulses") {
        for(let j of i.products) {
            dalsApulsesArr.push(
            <ProductCard
                productName = {j.productName}
                id = {i.products.indexOf(j)}
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
export const dalsApulses = dalsApulsesArr ;  
let gheeAoilsArr = [] ; 
for(let i of data.productData[0].items) {
    if(i.cat_name === "Ghee & Oils") {
        for(let j of i.products) {
            gheeAoilsArr.push(<ProductCard
                productName = {j.productName}
                id = {i.products.indexOf(j)}
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
export const gheeAoils = gheeAoilsArr ;  

let masalas_spicesArr = [] ; 
for(let i of data.productData[0].items) {
    if(i.cat_name === "masalas spices") {
        for(let j of i.products) {
            masalas_spicesArr.push(<ProductCard
                productName = {j.productName}
                id = {i.products.indexOf(j)}
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
export const masalas_spices = masalas_spicesArr ; 

let menWWArr = [] ; 
for(let i of data.productData[2].items) {
    if(i.cat_name === "Men Western Wear") {
        for(let j of i.products) {
            menWWArr.push(<ProductCard
                productName = {j.productName}
                id = {i.products.indexOf(j)}
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
export const menWW  = menWWArr ; 

let womenWWArr = [] ; 
for(let i of data.productData[2].items) {
    if(i.cat_name === "Women Western Wear") {
        for(let j of i.products) {
            womenWWArr.push(<ProductCard
                productName = {j.productName}
                id = {i.products.indexOf(j)}
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
export const womenWW = womenWWArr;
let mobilesATArr = [] ; 
for(let i of data.productData[1].items) {
    if(i.cat_name === "Mobiles & Tablets") {
        for(let j of i.products) {
            mobilesATArr.push(<ProductCard
                productName = {j.productName}
                id = {i.products.indexOf(j)}
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
export const mobilesAT = mobilesATArr ; 
let rice_productsArr = [] ; 
for(let i of data.productData[0].items) {
    if(i.cat_name === "Rice & Rice Products") {
        for(let j of i.products) {
            rice_productsArr.push(<ProductCard
                productName = {j.productName}
                id = {i.products.indexOf(j)}
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
export const rice_products = rice_productsArr ; 
let tvASpeakerArr = [] ; 
for(let i of data.productData[1].items) {
    if(i.cat_name === "TV & Speaker") {
        for(let j of i.products) {
            tvASpeakerArr.push(<ProductCard
                productName = {j.productName}
                id = {i.products.indexOf(j)}
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
export const tvASpeaker = tvASpeakerArr ; 

let bestSellsArr = [] ;
for(let i of data.productData) {
    if(i.cat_name == "Electronics") {
        for(let j of i.items) {
            for(let r of j.products) {
                bestSellsArr.push(
                <ProductCard
                    productName = {r.productName}
                    catImg = {r.catImg}
                    title = {`${r.productName.slice(0,30)}...`}
                    rating = {r.rating}
                    brand = {r.brand}
                    price = {r.price}
                    oldPrice = {r.oldPrice}
                    id = {j.products.indexOf(r)+" " + i.items.indexOf(j)}
                    />)
            }
            
        }
    }
}
export const bestSellsA = bestSellsArr ;
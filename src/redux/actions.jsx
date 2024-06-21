import data from "../data/data";
import ProductCard from "../components/card/ProductCard";
let dalsApulsesArr = [] ; 
for(let i of data.productData[0].items) {
    if(i.cat_name === "dals and pulses") {
        for(let j of i.products) {
            dalsApulsesArr.push(
            <ProductCard key = {j.id} description = {j.description}
                productName = {j.productName}
                id = {j.id}
                catImg = {j.catImg}
                title = {`${j.productName.slice(0,30)}...`}
                rating = {j.rating}
                brand = {j.brand}
                price = {j.price}
                oldPrice = {j.oldPrice}
                size = {j.weight[0]}
                />)
            }
        }
    }
export const dalsApulses = dalsApulsesArr ;  
let bestSellsArr = [] ;
for(let i of data.productData) {
    if(i.cat_name === "Electronics") {
        for(let j of i.items) {
            for(let r of j.products) {
                bestSellsArr.push(
                <ProductCard key = {r.id} description = {r.description}
                    productName = {r.productName}
                    catImg = {r.catImg}
                    title = {`${r.productName.slice(0,30)}...`}
                    rating = {r.rating}
                    brand = {r.brand}
                    price = {r.price}
                    oldPrice = {r.oldPrice}
                    id = {r.id}
                    />)
            }
            
        }
    }
}
export const bestSellsA = bestSellsArr ;

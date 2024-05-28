import data from "../../data/data";
import './items.css' ; 
import { useDispatch, useSelector } from "react-redux";
import { mainCatsA, productsInHomeA } from "../../redux/reducer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Items() {
    let products = useSelector(state => state.productsData) ; 
    let dispatch = useDispatch() ; 
    let count = 0 ; 
    let mainCats = [] ; 
    let address = document.location.href.slice(document.location.href.lastIndexOf("/")+1);
    let sub_cats = [
        <div className="sub-cat">
            <input type="radio" value="all" id="all" name="sub cat" onClick={() => dispatch(productsInHomeA({ catName : address, subCat : "all"}))}/>
            <label htmlFor="all">All</label>
        </div>
    ] ; 
    let groceriesNum = 0 ; 
    let eleNums = 0 ; 
    let fashionNums = 0 ; 
    useEffect(() => {
        dispatch(mainCatsA({type : address}))
    } ,[])
    for(let i of data.productData) {
        for(let j of i.items) {
            if (i.cat_name === "groceries") groceriesNum += j.products.length ; 
            else if (i.cat_name === "Electronics") eleNums += j.products.length ; 
            else fashionNums += j.products.length ; 
        }
    }
    for (let i of data.productData) {
        mainCats.push(
            <Link to = {i.cat_name} className="cat-item" onClick={() => dispatch(mainCatsA({type : i.cat_name}))}>
                <div className="cat-name">
                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg" alt="" />
                    <p>{i.cat_name}</p>
                </div>
                <div className="numOfItems">{i.cat_name === "groceries"?groceriesNum : i.cat_name === "Electronics" ? eleNums : fashionNums}</div>
            </Link>
        )
        if (i.cat_name === address) {
            for(let j of i.items) {
                sub_cats.push(
                    <div className="sub-cat">
                        <input type="radio" value={j.cat_name} id={j.cat_name} name="sub cat" onClick={() => dispatch(productsInHomeA({ catName : i.cat_name, subCat : j.cat_name}))}/>
                        <label htmlFor={j.cat_name}>{j.cat_name}</label>
                    </div>
                )
            }
        }
    }
    for(let i of products) {
        count++ ; 
    }
    function selectCat(e) {
        console.log(e.target.childNode)
    }
    return (
        <div className="items">
            <h1>{address}</h1>
            <div className="content">
                <div className="dashboard">
                    {/* categories */}
                    <div className="dash-section categories">
                        <h2 className="dash-title">Category</h2>
                        {mainCats}
                    </div>

                    {/* fill by price */}
                    <div className="dash-section fillByPrice">
                        <div className="filterCats">
                            <h3 className="dash-title">Filter By Sub Categories</h3>
                            <div className="sub-cats">{sub_cats} </div>
                            <div className="image">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="products">
                    <p>we found <span>{count}</span> item for you.</p>
                    <div className="products-items">{products}</div>
                </div>
            </div>
        </div>
    )
}
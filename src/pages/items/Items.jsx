import data from "../../data/data";
import './items.css' ; 
import { useDispatch, useSelector } from "react-redux";
import { listsOfProductsA } from "../../redux/reducer";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";

export default function Items() {
    useEffect(() => {
        window.scrollTo({
            top : 0 , 
            left : 0 , 
            behavior : "instant"
        }) ; 
    } ,[])

    const products = useSelector(state => state.listsOfProducts) ; 
    const dispatch = useDispatch() ; 
    const inputRadio = useRef() ; 
    const firstInputRadio = useRef() ; 
    const address = document.location.href.slice(document.location.href.lastIndexOf("/")+1);

    let mainCats = [] ; 
    let sub_cats = [
        <div className="sub-cat">
            <input 
                ref={firstInputRadio} 
                type="radio" 
                value="all" 
                id="all" 
                name="sub-cat" 
                onClick={() => chooseRadio(address , "all")}/>
            <label htmlFor="all">All</label>
        </div>
    ] ; 
    let groceriesNum = 0 ; 
    let eleNums = 0 ; 
    let fashionNums = 0 ; 

    // to choose all button by default 
    useEffect(() => {
        dispatch(listsOfProductsA({catName : address , subCat : "all"})) ; 
        firstInputRadio.current.checked = true ; 
    } ,[]) ; 

    // select input to show it's products
    const chooseRadio = (catName , subCat) => {
        dispatch(listsOfProductsA({ catName : catName, subCat : subCat})) ; 
    }

    for (let i of data.productData) {
        // put length of products
        for(let j of i.items) {
            if (i.cat_name === "groceries") groceriesNum += j.products.length ; 
            else if (i.cat_name === "Electronics") eleNums += j.products.length ; 
            else fashionNums += j.products.length ; 
        }
        mainCats.push(
            <Link to = {i.cat_name} className="cat-item" onClick={() => {
                dispatch(listsOfProductsA({ catName : i.cat_name, subCat : "all"}))
                firstInputRadio.current.checked = true ; 
            }}>
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
                        <input 
                            type="radio" 
                            value={j.cat_name} 
                            id={j.cat_name} 
                            name="sub-cat" 
                            onClick={() => chooseRadio(i.cat_name , j.cat_name)}/>
                        <label htmlFor={j.cat_name}>{j.cat_name}</label>
                    </div>
                )
            }
        }
    }
    return (
        <div className="items">
            <Container fluid = "xxl">
                <h1>{address}</h1>
                <div className="content">
                    <div className="dashboard">
                        {/* categories */}
                        <div className="dash-section categories">
                            <h2 className="dash-title">Category</h2>
                            {mainCats}
                        </div>

                        {/* filter by sub cat */}
                        <div className="dash-section">
                            <div className="filterCats">
                                <h3 className="dash-title">Filter By Sub Categories</h3>
                                <div className="sub-cats" ref={inputRadio}>{sub_cats} </div>
                                <div className="image">
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* products */}
                    <div className="products">
                        <p>we found <span>{products.length}</span> item for you.</p>
                        <div className="products-items">{products}</div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
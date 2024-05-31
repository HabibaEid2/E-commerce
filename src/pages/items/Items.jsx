import data from "../../data/data";
import './items.css' ; 
import { useDispatch, useSelector } from "react-redux";
import { productsA } from "../../redux/reducer";
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

    let products = useSelector(state => state.productsData) ; 
    let dispatch = useDispatch() ; 
    let inputRadio = useRef() ; 
    let firstInputRadio = useRef() ; 
    let address = document.location.href.slice(document.location.href.lastIndexOf("/")+1);
    let mainCats = [] ; 
    let sub_cats = [
        <div className="sub-cat">
            <input ref={firstInputRadio} type="radio" value="all" id="all" name="sub-cat" onClick={(e) => chooseRadio(e, address , "all")}/>
            <label htmlFor="all">All</label>
        </div>
    ] ; 
    let groceriesNum = 0 ; 
    let eleNums = 0 ; 
    let fashionNums = 0 ; 

    useEffect(() => {
        dispatch(productsA({catName : address , subCat : "all"})) ; 
        firstInputRadio.current.checked = true ; 
    } ,[]) ; 

    for (let i of data.productData) {

        for(let j of i.items) {
            if (i.cat_name === "groceries") groceriesNum += j.products.length ; 
            else if (i.cat_name === "Electronics") eleNums += j.products.length ; 
            else fashionNums += j.products.length ; 
        }

        mainCats.push(
            <Link to = {i.cat_name} className="cat-item" onClick={() => {
                dispatch(productsA({ catName : i.cat_name, subCat : "all"}))
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
                        <input type="radio" value={j.cat_name} id={j.cat_name} name="sub-cat" onClick={() => chooseRadio(i.cat_name , j.cat_name)}/>
                        <label htmlFor={j.cat_name}>{j.cat_name}</label>
                    </div>
                )
            }
        }
    }
    function chooseRadio(catName , subCat) {
        dispatch(productsA({ catName : catName, subCat : subCat})) ; 
    }
    return (
        <div className="items">
            <Container fluid = "xxl">
                <h1 className="mainTitle">{address}</h1>
                <div className="content">
                    <div className="dashboard">
                        {/* categories */}
                        <div className="dash-section categories">
                            <h2 className="mainTitle dash-title">Category</h2>
                            {mainCats}
                        </div>

                        {/* fill by price */}
                        <div className="dash-section fillByPrice">
                            <div className="filterCats">
                                <h3 className="mainTitle dash-title">Filter By Sub Categories</h3>
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
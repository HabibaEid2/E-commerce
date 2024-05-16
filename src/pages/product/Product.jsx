import { useContext, useEffect, useState } from 'react';
import data from '../../data/data';
import './product.css' ; 
import { Button, Container } from 'react-bootstrap';
import { cartList } from '../../context/CartContext';
import CartProduct from '../../components/cartProduct/CartProduct';
import Rate from '../../components/rate/Rate';
export default function Product() {
    let location = window.location.href.slice(window.location.href.lastIndexOf('/') + 1) ; 
    let [productObj , setProductObj] = useState({}) ; 
    let [active , setActive] = useState(0) ; 
    let cartContext = useContext(cartList) ; 
    useEffect(() => {
        for(let i of data.productData) {
            for(let j of i.items) {
                for(let r of j.products) {
                    if (r.id == location) setProductObj(r) ; 
                }
            }
        }
    } , [])
    console.log(productObj)

    function handleActive(e) {
        setActive(e.target.id) ; 
    }
    function addToCart() {
        cartContext.setArr((prev) => {
            prev.push(<CartProduct 
                id = {productObj.id} 
                title = {productObj.productName}
                description = {productObj.description}
                img = {productObj.catImg}/>)
                return prev ; 
        })
    }
    let weight = [] ; 
    if (productObj.weight) {
        for(let i of productObj.weight) {
            weight.push(
            <Button 
            variant='light' 
            className={active == productObj.weight.indexOf(i) ? 'active' : null} 
            id = {productObj.weight.indexOf(i)} 
            onClick={handleActive}
            key = {productObj.weight.indexOf(i)}
            >{i}g</Button>)
        }
    }

    

    return (
        <div className="productData">
            <Container fluid = "xxl">
                <div className="mainImg">
                    <img src={productObj.catImg}/>
                </div>
                <div className="content">
                    <h1 className="title">{productObj.productName}</h1>
                    <div className="rate">{<Rate rate = {+productObj.rating}/>}<span className='p-color'>(32) reviews</span></div>
                    <div className="price">
                        <div className="newPrice">Rs {productObj.price}</div>
                        <div className="oldPriceAD">
                            <div className="discount">{productObj.discount}% Off</div>
                            <div className="oldPrice">Rs {productObj.oldPrice}</div>
                        </div>
                    </div>
                    <div className="description p-color">{productObj.description}</div>
                    <div className="size">
                        <p>Size / Weight:</p>
                        <div>{weight}</div>
                    </div>
                    <div className="addition">
                        <Button className="add-to-cart" onClick={addToCart}>Add To Cart</Button>
                        <Button variant='light' className="fav">
                            <i className="fa-regular fa-heart"></i>
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
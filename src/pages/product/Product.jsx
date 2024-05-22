import {useEffect, useState } from 'react';
import data from '../../data/data';
import './product.css' ; 
import { Button, Container } from 'react-bootstrap';
import CartProduct from '../../components/cartProduct/CartProduct';
import Rate from '../../components/rate/Rate';
import { useDispatch, useSelector} from 'react-redux';
import { addToCartA, removeFromCartA } from '../../redux/reducer';
export default function Product() {
    let location = +window.location.href.slice(window.location.href.lastIndexOf('/') + 1) ; 
    let [productObj , setProductObj] = useState({}) ; 
    let [active , setActive] = useState(0) ; 
    let [sizeValue , setSize] = useState() ; 
    let list = useSelector(state => state.cartList) ; 
    let dispatch = useDispatch() ; 
    let weight = [] ; 
    let index = list.findIndex((ele) => ele.props.id == location) ; 
    useEffect(() => {
        for(let i of data.productData) {
            for(let j of i.items) {
                for(let r of j.products) {
                    if (r.id == location) {
                        setProductObj(r)
                        setSize(`${r.weight[0]}g`)
                    } ; 
                }
            }
        }
    } , [])

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
    function handleActive(e) {
        setActive(e.target.id) ; 
        setSize(e.target.innerHTML) ; 
    }

    function handleAdditionToC () {
        dispatch(addToCartA(
            <CartProduct 
            key = {productObj.id} 
            id = {productObj.id} 
            img = {productObj.catImg}
            title = {productObj.productName.slice(0 , 20)}
            description = {`${productObj.description.slice(0 , 70)}...`} 
            rating = {productObj.rating}
            price = {productObj.price}
            oldPrice = {productObj.oldPrice}
            size = {sizeValue}
            />)) ; 
    }

    function handleRemoveFromCart() {
        dispatch(removeFromCartA(index)) ; 
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
                        {index !== -1 ? 
                        <Button className="add-to-cart" onClick={handleRemoveFromCart}>remove from cart</Button> : 
                        <Button className="add-to-cart" onClick={handleAdditionToC}>Add To Cart</Button>
                        }
                        
                        <Button variant='light' className="fav">
                            <i className="fa-regular fa-heart"></i>
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
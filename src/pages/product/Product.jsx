import {useEffect, useState } from 'react';
import data from '../../data/data';
import './product.css' ; 
import { Button, Container } from 'react-bootstrap';
import CartProduct from '../../components/cartProduct/Cart_Fav_Product';
import Rate from '../../components/rate/Rate';
import { useDispatch, useSelector} from 'react-redux';
import { addToCartA, addToFavListA, removeFromCartA, removeFromFavListA } from '../../redux/reducer';

export default function Product() {
    const location = +window.location.href.slice(window.location.href.lastIndexOf('/') + 1) ; 
    const [productObj , setProductObj] = useState({}) ; 
    const [active , setActive] = useState(0) ; 
    const [sizeValue , setSize] = useState() ; 
    const list = useSelector(state => state.cartList) ; 
    const favList = useSelector(state => state.favList) ; 
    const dispatch = useDispatch() ; 
    const indexInCart = list.findIndex((ele) => ele.props.id === location) ; 
    const indexInFav = favList.findIndex((ele) => ele.props.id === location) ; 
    const weight = [] ; 
    const weightSection = null ; 

    useEffect(() => {
        window.scrollTo({
            top : 0 , 
            left : 0 , 
            behavior : "instant"
        }) ; 
        
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
            className={active == productObj.weight.indexOf(i) ? 'mainButton' : null} 
            id = {productObj.weight.indexOf(i)} 
            onClick={handleActive}
            key = {productObj.weight.indexOf(i)}
            >{i}g</Button>)
        } ; 
        if (weight.length > 1) {
            weightSection = <div className="size">
                <p>Size / Weight:</p>
                <div>{weight}</div>
            </div>
        }
    }
    const handleActive = (e) => {
        setActive(e.target.id) ; 
        setSize(e.target.innerHTML) ; 
    }

    const handleAdditionToC = ()=> {
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
                    place = "cart"
                    /> 
        )) ; 
    }
    const handleRemoveFromCart = ()=> {
        dispatch(removeFromCartA(indexInCart)) ; 
    }
    const handleAdditionToFav = ()=> {
        dispatch(addToFavListA(
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
                    place = "fav"
                    /> 
        ))
    }
    const handleRemoveFromFav = ()=> {
        dispatch(removeFromFavListA(indexInFav))
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
                        <div className ="oldPriceAD">
                            <div className="discount">{productObj.discount}% Off</div>
                            <div className="oldPrice">Rs {productObj.oldPrice}</div>
                        </div>
                    </div>
                    <div className="description p-color">{productObj.description}</div>
                    {weightSection}
                    <div className="addition" style={{marginTop : "20px"}}>
                        {indexInCart !== -1 ? 
                        <Button className = "btn mainButton" onClick={handleRemoveFromCart}><i className="fa-solid fa-circle-check"></i> Added</Button>: 
                        <Button className = "btn mainButton" onClick={handleAdditionToC}><i className="fa-solid fa-cart-shopping"></i> Add to cart</Button>
                        }
                        
                        {indexInFav === -1 ? 
                            <Button className="fav-btn" onClick={handleAdditionToFav}><i className="fa-regular fa-heart"></i></Button> : 
                            <Button className="fav-btn" onClick={handleRemoveFromFav}><i className="fa-solid fa-heart"></i></Button>
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}
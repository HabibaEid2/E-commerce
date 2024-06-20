import { Button, Card } from "react-bootstrap";
import './card.css'
import { Link } from "react-router-dom";
import Rate from "../rate/Rate";
import { useDispatch, useSelector } from "react-redux";
import { addToCartA, removeFromCartA } from "../../redux/reducer";
import CartProduct from "../cartProduct/Cart_Fav_Product";

export default function ProductCard(props) {
    let cartList = useSelector(state => state.cartList) ; 
    let index = cartList.findIndex((ele) => ele.props.id === props.id) ; 
    let dispatch = useDispatch() ; 
    function addToCart() {
        dispatch(addToCartA(
            <CartProduct
            key = {props.id} 
            id = {props.id} 
            img = {props.catImg}
            title = {props.productName.slice(0 , 20)}
            description = {`${props.description.slice(0 , 70)}...`} 
            rating = {props.rating}
            price = {props.price}
            oldPrice = {props.oldPrice}
            place = "cart" 
            size = {props.size}
            />)) ; 
    }
    function removeFromCart () {
        dispatch(removeFromCartA(index)) ;
    }
    return (
            <Card style={{ width: '13rem' }} title={props.productName} key = {props.id} id = {props.id} >
                <Card.Img variant="top" src={props.catImg} />
                <Card.Body>
                    <div className="brandOnHead"></div>
                    <Card.Title>
                    <Link to={`/products/${props.id}`}>{props.title}</Link>
                    </Card.Title>
                    <Card.Text>{<Rate rate = {+props.rating}/>}</Card.Text>
                    <Card.Text>By<span className="bodyBrand">{props.brand}</span></Card.Text>
                    <div className="price">
                        <div className="newPrice">Rs{props.price}</div>
                        <div className="oldPrice">Rs{props.oldPrice}</div>
                    </div>
                    {index === -1 ? 
                    <Button onClick={addToCart}><i className="fa-solid fa-cart-shopping"></i> Add</Button>: 
                    <Button onClick={removeFromCart}><i className="fa-solid fa-circle-check"></i> Added</Button>
                    }
                </Card.Body>
            </Card>
    )
}
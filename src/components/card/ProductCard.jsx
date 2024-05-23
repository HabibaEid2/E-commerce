import { Button, Card } from "react-bootstrap";
import './card.css'
import { Link } from "react-router-dom";
import Rate from "../rate/Rate";
import { useDispatch } from "react-redux";
import { addToCartA } from "../../redux/reducer";
import CartProduct from "../cartProduct/Cart_Fav_Product";

export default function ProductCard(props) {
    let dispatch = useDispatch() ; 
    function addToCart(e) {
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
            />)) ; 

        console.log(e.target.parentElement.parentElement.id) ; 
    }
    return (
            <Card style={{ width: '13rem' }} title={props.productName} key = {props.id} id = {props.id} >
                <Card.Img variant="top" src={props.catImg} />
                <Card.Body>
                    <div className="brandOnHead"></div>
                    <Card.Title>
                    <Link to={`products/${props.id}`}>{props.title}</Link>
                    </Card.Title>
                    <Card.Text>{<Rate rate = {+props.rating}/>}</Card.Text>
                    <Card.Text>By<span className="bodyBrand">{props.brand}</span></Card.Text>
                    <div className="price">
                        <div className="newPrice">Rs{props.price}</div>
                        <div className="oldPrice">Rs{props.oldPrice}</div>
                    </div>
                    <Button onClick={addToCart}><i className="fa-solid fa-cart-shopping"></i>Add</Button>
                </Card.Body>
            </Card>
    )
}
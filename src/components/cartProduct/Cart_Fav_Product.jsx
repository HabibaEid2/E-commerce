import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './cartProduct.css'
import Rate from "../rate/Rate";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCartA, removeFromFavListA } from "../../redux/reducer";
import { useState } from "react";
export default function CartProduct(props) {
    let [id , setID] = useState("") ; 
    let cartList = useSelector(state => state.cartList) ;
    let favList = useSelector(state => state.favList) ; 
    let dispatch = useDispatch() ;
    let indexInCart ; 
    let indexInFav ; 
    for(let i = 0 ; i< cartList.length ;i++) {
        if(cartList[i].props.id === id) {
            indexInCart = i ; 
        }
    }
    for(let i = 0 ; i< favList.length ;i++) {
        if(favList[i].props.id === id) {
            indexInFav = i ; 
        }
    }
    function handleRemoveItemC() {
        dispatch(removeFromCartA(indexInCart)) ; 
    }
    function handleRemoveItemF() {
        dispatch(removeFromFavListA(indexInFav)) ; 
    }
    function getPlace(e) {
        if (props.place === "cart") handleRemoveItemC()
        else  handleRemoveItemF() ;
        setID(e.target.parentElement.parentElement.parentElement.id) ; 
        
    }
    return (
        <Card title={props.description} id={props.id}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>
                    <Link to={`products/${props.id}`}>{props.title}</Link>
                </Card.Title>
                <Card.Text>{`${props.description.slice(props.title.length , 100)}`}</Card.Text>
                <Rate rate = {+props.rating}/>
                <div className="size">
                    {props.size != undefined && `size : ${props.size}`}
                </div>
                <div className="price">
                    <div className="newPrice">Rs{props.price}</div>
                    <div className="oldPrice">Rs{props.oldPrice}</div>
                </div>
                <Button title = "remove"><i class="fa-solid fa-trash-can" onClick={getPlace}></i></Button>
            </Card.Body>
        </Card>
)
}
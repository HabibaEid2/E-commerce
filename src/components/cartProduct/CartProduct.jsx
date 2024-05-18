import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './cartProduct.css'
import Rate from "../rate/Rate";
import { useSelector } from "react-redux";
import cloneDeep from "lodash.clonedeep";
import { useState } from "react";
export default function CartProduct(props) {
    let cartList = useSelector(state => state.cartList) ; 
    // let clonedList = cloneDeep(cartList) ; 
    let [deleted , setDeleted] = useState(false) ; 
    let index ; 
    for(let i = 0 ; i< cartList.length ;i++) {
        if(cartList[i].props.id == props.id) {
            index = i ; 
        }
    }
    function handleRemoveItem() {
        setDeleted(true) ; 
        // cartList.splice(index , 1) ; 
        // console.log(cartList)
        console.log(Object.getOwnPropertyDescriptor(cartList[index] , "key")) ; 
    }
    return (
        <Link to={`products/${props.id}`} key = {props.id}>
            <Card>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Rate rate = {+props.rating}/>
                    <div className="size">
                        size : {props.size}
                    </div>
                    <div className="price">
                        <div className="newPrice">Rs{props.price}</div>
                        <div className="oldPrice">Rs{props.oldPrice}</div>
                    </div>
                    <Button onClick={handleRemoveItem} title = "remove"><i class="fa-solid fa-trash-can"></i></Button>
                </Card.Body>
            </Card>
        </Link>
    )
}
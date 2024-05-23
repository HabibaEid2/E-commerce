import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './cartProduct.css'
import Rate from "../rate/Rate";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCartA } from "../../redux/reducer";
export default function CartProduct(props) {
    let cartList = useSelector(state => state.cartList) ;
    let favList = useSelector(state => state.wishList) ; 
    let dispatch = useDispatch() ;
    let indexInCart ; 
    let indexInFav ; 
    for(let i = 0 ; i< cartList.length ;i++) {
        if(cartList[i].props.id == props.id) {
            indexInCart = i ; 
        }
    }
    for(let i = 0 ; i< favList.length ;i++) {
        if(cartList[i].props.id == props.id) {
            indexInFav = i ; 
        }
    }
    function handleRemoveItemC() {
        dispatch(removeFromCartA(indexInCart)) ; 
        console.log(cartList)
    }
    return (
        <Link to={`products/${props.id}`}>
            <Card title={props.description}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{`${props.description.slice(props.title.length , 100)}`}</Card.Text>
                    <Rate rate = {+props.rating}/>
                    <div className="size">
                        size : {props.size}
                    </div>
                    <div className="price">
                        <div className="newPrice">Rs{props.price}</div>
                        <div className="oldPrice">Rs{props.oldPrice}</div>
                    </div>
                    <Button onClick={handleRemoveItemC} title = "remove"><i class="fa-solid fa-trash-can"></i></Button>
                </Card.Body>
            </Card>
        </Link>
    )
}
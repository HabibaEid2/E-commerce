import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './cartProduct.css'
import Rate from "../rate/Rate";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCartA, removeFromFavListA } from "../../redux/reducer";
export default function CartProduct(props) {
    let cartList = useSelector(state => state.cartList) ;
    let favList = useSelector(state => state.favList) ; 
    let dispatch = useDispatch() ;

    let id ; 
    let indexInCart = null ; 
    let indexInFav = null; 

    // remove item from cart list
    function handleRemoveItemC(id) {
        for(let i = 0 ; i< cartList.length ;i++) {
            if(cartList[i].props.id === +id) {
                indexInCart = i ; 
            }
        }
        dispatch(removeFromCartA(indexInCart)) ; 
    }

    // remove item from favorite list
    function handleRemoveItemF(id) {
        for(let i = 0 ; i< favList.length ;i++) {
            if(favList[i].props.id === +id) {
                indexInFav = i ; 
            }
        }
        dispatch(removeFromFavListA(indexInFav)) ; 
    }

    // check place of item (cart or fav)
    function getPlace(e) {
        id = e.target.parentElement.parentElement.parentElement.id ; 
        if (props.place === "cart") handleRemoveItemC(id)
        else handleRemoveItemF(id) ; 
    }
    
    return (
        <Card title={props.description} id={props.id}>
            <Button title = "remove"><i class="fa-solid fa-trash-can" onClick={getPlace}></i></Button>
            <div>
                <Card.Img variant="top" src={props.img} />
            </div>
            <Card.Body>
                <Card.Title>
                    <Link to={`products/${props.id}`}>{props.title}</Link>
                </Card.Title>
                <Card.Text>
                    {`${props.description.slice(props.title.length , 100)}`}
                </Card.Text>
                <Rate rate = {+props.rating}/>
                <div className="size">
                    {props.size != undefined && `size : ${props.size}`}
                </div>
                <div className="price">
                    <div className="newPrice">Rs{props.price}</div>
                    <div className="oldPrice">Rs{props.oldPrice}</div>
                </div>
            </Card.Body>
        </Card>
)
}
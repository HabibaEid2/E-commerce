import { Button, Card } from "react-bootstrap";
import './productCard.css'
import { Link, useNavigate } from "react-router-dom";
import Rate from "../rate/Rate";
import { useDispatch, useSelector } from "react-redux";
import { addToCartA, addToFavListA, removeFromCartA, removeFromFavListA } from "../../redux/reducer";
import CartProduct from "../cartProduct/Cart_Fav_Product";

export default function ProductCard(props) {
    let cartList = useSelector(state => state.cartList) ; 
    let favList = useSelector(state => state.favList) ; 
    let dispatch = useDispatch() ; 
    let go = useNavigate() ; 

    let indexInCart = cartList.findIndex((ele) => ele.props.id === props.id) ; 
    let indexInFav = favList.findIndex((ele) => ele.props.id === props.id) ; 

    // handle addition to cart list 
    function handleAdditionToC() {
        if (indexInCart === -1) {
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
        else dispatch(removeFromCartA(indexInCart)) ;
    }

    // handle addition to fav. list
    function handleAdditionToFav() {
        if(indexInFav === -1) {
            dispatch(addToFavListA(
            <CartProduct
            key = {props.id} 
            id = {props.id} 
            img = {props.catImg}
            title = {props.productName.slice(0 , 20)}
            description = {`${props.description.slice(0 , 70)}...`} 
            rating = {props.rating}
            price = {props.price}
            oldPrice = {props.oldPrice}
            place = "fav" 
            size = {props.size}
            />
            ))
        }
        else dispatch(removeFromFavListA(indexInFav))
    }

    return (
            <Card style={{ width: '13rem' }} title={props.productName} key = {props.id} id = {props.id} >
                <div>
                    <div className="actions">
                        <i 
                            onClick={() => go(`/products/${props.id}`)} 
                            className="fa-regular fa-eye" 
                            title="show"/>

                        <i 
                            className={`fa-${indexInFav === -1 ? "regular" : "solid"} fa-heart`} 
                            title="add to fav. list"
                            onClick={handleAdditionToFav}/>
                    </div>
                    <Card.Img variant="top" src={props.catImg} />
                </div>
                <Card.Body>
                    <Card.Title>
                        <Link to={`/E-commerce/products/${props.id}`}>{props.title}</Link>
                    </Card.Title>
                    <Card.Text>{<Rate rate = {+props.rating}/>}</Card.Text>
                    <Card.Text>By<span className="bodyBrand">{props.brand}</span></Card.Text>
                    <div className="price">
                        <div className="newPrice">Rs{props.price}</div>
                        <div className="oldPrice">Rs{props.oldPrice}</div>
                    </div>
                    <Button onClick={handleAdditionToC}>
                        <i 
                            className={`fa-solid ${indexInCart === -1 ?
                            "fa-cart-shopping" :
                            "fa-circle-check"}`}
                        /> 
                            {indexInCart === -1 ?"Add" : "Added"}
                    </Button>
                </Card.Body>
            </Card>
    )
}
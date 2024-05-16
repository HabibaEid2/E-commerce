import { Button, Card } from "react-bootstrap";
import './card.css'
import { Link } from "react-router-dom";
import Rate from "../rate/Rate";

export default function ProductCard(props) {
    return (
        <Link to={`products/${props.id}`}>
            <Card style={{ width: '13rem' }} title={props.productName} key = {props.id}>
                <Card.Img variant="top" src={props.catImg} />
                <Card.Body>
                    <div className="brandOnHead"></div>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{<Rate rate = {+props.rating}/>}</Card.Text>
                    <Card.Text>By<span className="bodyBrand">{props.brand}</span></Card.Text>
                    <div className="price">
                        <div className="newPrice">Rs{props.price}</div>
                        <div className="oldPrice">Rs{props.oldPrice}</div>
                    </div>
                    <Button><i className="fa-solid fa-cart-shopping"></i>Add</Button>
                </Card.Body>
            </Card>
        </Link>
        
    )
}
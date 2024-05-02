import { Button, Card } from "react-bootstrap";
import './card.css'

export default function ProductCard(props) {
    let $3_5 = <div className="rate">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star-half-stroke"></i>
        <i className="fa-regular fa-star"></i>
    </div>

    let $4$4_2 = <div className="rate">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-regular fa-star"></i>
    </div>

    let $4_5 = <div className="rate">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star-half-stroke"></i>
    </div>

    let $5= <div className="rate">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
    </div>

    return (
        <Card style={{ width: '13rem' }} title={props.productName} key = {props.id}>
                <Card.Img variant="top" src={props.catImg} />
                <Card.Body>
                    <div className="brandOnHead"></div>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{
                        props.rating == "3.5" ? $3_5 : props.rating == "4.5" ? $4_5 : props.rating == "5" ? $5 : $4$4_2
                        }</Card.Text>
                    <Card.Text>By<span className="bodyBrand">{props.brand}</span></Card.Text>
                    <div className="price">
                        <div className="newPrice">Rs{props.price}</div>
                        <div className="oldPrice">Rs{props.oldPrice}</div>
                    </div>
                    <Button variant="primary"><i className="fa-solid fa-cart-shopping"></i>Add</Button>
                </Card.Body>
            </Card>
    )
}
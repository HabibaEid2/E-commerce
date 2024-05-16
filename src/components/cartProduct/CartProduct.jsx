import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './cartProduct.css'
export default function CartProduct(props) {
    return (
        <Link to={`products/${props.id}`}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </Link>
    )
}
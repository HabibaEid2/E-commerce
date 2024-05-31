import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './bottom_header.css'
import { useDispatch } from "react-redux";
import { productsA } from "../../redux/reducer";
export default function BottomHeader() {
    let dispatch = useDispatch() ; 
    return (
        <div className="bottom-header">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid = "xxl">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Link to = "/">Home</Link>
                    <Link onClick={() => dispatch(productsA({ catName : "groceries", subCat : "all"}))} to = "cat/groceries">Grocerires</Link>
                    <Link onClick={() => dispatch(productsA({ catName : "Electronics", subCat : "all"}))} to= "cat/Electronics">Electronics</Link>
                    <Link onClick={() => dispatch(productsA({ catName : "Fashion", subCat : "all"}))} to= "cat/Electronics">Fashion</Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
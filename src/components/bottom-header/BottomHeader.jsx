import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './bottom_header.css'
import { useDispatch } from "react-redux";
import { listsOfProductsA } from "../../redux/reducer";
export default function BottomHeader() {
    let dispatch = useDispatch() ; 
    return (
        <div className="bottom-header">
            <Navbar expand="lg" className="bg-body-tertiary">

                <Container fluid = "xxl">

                    <div className="browse-all">
                        <i className="fa-solid fa-bookmark"></i>
                        <div className="txt">
                            Browse All Categories
                        </div>
                    </div>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <div>
                            <Link to = "E-commerce">Home</Link>
                            <Link 
                                onClick={() => dispatch(listsOfProductsA({ catName : "groceries", subCat : "all"}))} 
                                to = "E-commerce/cat/groceries">Grocerires</Link>
                            <Link 
                                onClick={() => dispatch(listsOfProductsA({ catName : "Electronics", subCat : "all"}))}
                                to= "E-commerce/cat/Electronics">Electronics</Link>
                            <Link 
                                onClick={() => dispatch(listsOfProductsA({ catName : "Fashion", subCat : "all"}))} 
                                to= "E-commerce/cat/Fashion">Fashion</Link>
                        </div>

                        <div className="contact">
                            <i className="fa-solid fa-headphones-simple"></i>
                            <div>
                                <div className="number">1900 - 888</div>
                                <div className="info">24/7 Support Center</div>
                            </div>
                        </div>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
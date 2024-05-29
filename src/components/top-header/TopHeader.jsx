import { Button, CloseButton, Container , Dropdown ,DropdownButton, Modal} from "react-bootstrap";
import data from '../../data/data'
import logo from './../../images/logo.svg'
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { logged } from "../../context/Context";
import { useSelector } from "react-redux";
import './top_header.css'
export default function Top_Header() {
    let [menuDisplay , setMenuDisplay] = useState("none") ; 
    let [showFav, setShowFav] = useState(false);
    let [showCart, setShowCart] = useState(false);
    let cookie = new Cookies() ; 
    let context = useContext(logged) ;
    let cart_products = useSelector(state => state.cartList) ; 
    let favList = useSelector(state => state.favList) ; 
    let headerMenu = [] ; 
    
    for(let i of data.productData) {
        for(let j of i.items) {
            headerMenu.push(<Dropdown.Item key={i.items.indexOf(j)} href="https://google.com">{j.cat_name} </Dropdown.Item>)
        }
    }
    useEffect(() => {
        if (cookie.get("token")) context.setValue(true) ;
        if (window.innerWidth >= 992) setMenuDisplay("flex")
        else setMenuDisplay("none")
    } , [])
    window.onresize = function() {
        if (window.innerWidth >= 992) setMenuDisplay("flex")
        else setMenuDisplay("none")
    }
    function clickMenu() {
        setMenuDisplay("flex")
    }
    function removeMenu() {
        setMenuDisplay("none")
    }
    function logout() {
        cookie.remove("token")
        context.setValue(false)
    }
    return(
        <header>
            <Container fluid = "xxl">
                <img src={logo} alt="logo"/>
                <div className="smallMenu" onClick={clickMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="content" style={{display : menuDisplay}}>
                    <CloseButton onClick={removeMenu}/>
                    <div className="searchBar">
                        <DropdownButton id="dropdown-basic-button" title = "categories">
                            {headerMenu}
                        </DropdownButton>
                        <input type = "search" placeholder="search for items..." className="topNavSearch"/>
                    </div>
                    <div className="userState">
                        <div className="wishList">
                            <Button className = "btn mainButton" onClick={() => setShowFav(true)}>
                                <div className="userStateNum">{favList.length}</div>
                                <i className="fa-solid fa-heart"></i> Favorite
                            </Button>
                            <Modal
                                show={showFav}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                                >
                                <Modal.Header>
                                    <Modal.Title id="contained-modal-title-vcenter">
                                    Favoriate List 
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>{favList}</Modal.Body>
                                <Modal.Footer>
                                    <Button class = "btn mainButton" onClick={() => setShowFav(false)}>Close</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>

                        <div className="cartList">
                            <Button className = "btn mainButton" onClick={() => setShowCart(true)}>
                                <div className="userStateNum">{cart_products.length}</div>
                                <i className="fa-solid fa-cart-shopping"></i> Cart
                            </Button>
                            <Modal
                                show={showCart}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                                >
                                <Modal.Header>
                                    <Modal.Title id="contained-modal-title-vcenter">
                                    Cart List
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="cartList">{cart_products}</div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={() => setShowCart(false)}>Close</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                    {context.value ? <Button className="btn mainButton sign-in" onClick={logout}>log out</Button> : 
                    <Link to = "sign-in">
                        <Button className="btn mainButton sign-in">sign in</Button>
                    </Link> 
                    }
                    
                </div>
            </Container>
        </header>
    )
}
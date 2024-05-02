import { Button, CloseButton, Container , Dropdown ,DropdownButton} from "react-bootstrap";
import './top_header.css'
import data from '../../data/data'
import logo from './../../images/logo.svg'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Top_Header() {
    let [menuDisplay , setMenuDisplay] = useState("none") ; 
    let headerMenu = [] ; 
    for(let i of data.productData) {
        for(let j of i.items) {
            headerMenu.push(<Dropdown.Item key={i.items.indexOf(j)} href="https://google.com">{j.cat_name} </Dropdown.Item>)
        }
    }
    useEffect(() => {
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
                        <div className="compare">
                            <div className="userStateNum">0</div>
                            <i className="fa-solid fa-recycle"></i> compare
                        </div>
                        <div className="wishList">
                            <div className="userStateNum">0</div>
                            <i className="fa-regular fa-heart"></i> WishList
                        </div>
                        <div className="cart">
                            <div className="userStateNum">0</div>
                            <i className="fa-solid fa-cart-shopping"></i> Cart
                        </div>
                    </div>
                    <Link to = "sign-in">
                        <Button className="sign-in">sign in</Button>
                    </Link>
                </div>
            </Container>
        </header>
    )
}
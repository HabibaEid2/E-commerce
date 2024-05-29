import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import './bottom_header.css'
import { useDispatch } from "react-redux";
import { mainCatsA } from "../../redux/reducer";
export default function BottomHeader() {
    let dispatch = useDispatch() ; 
    return (
        <div className="bottom-header">
            <Container fluid = "xxl">
                <ul>
                    <li>
                        <Link to = "/">Home</Link>
                    </li>
                    <li onClick={() => dispatch(mainCatsA({type : "groceries"}))}>
                        <Link to = "cat/groceries">Grocerires</Link>
                    </li>

                    <li onClick={() => dispatch(mainCatsA({type : "Electronics"}))}>
                        <Link to= "cat/Electronics">Electronics</Link>
                    </li>
                    <li onClick={() => dispatch(mainCatsA({type : "Fashion"}))}>
                        <Link to= "cat/Fashion">Fashion</Link>
                    </li>
                    <li>
                        <Link to= "check">Check Signin</Link>
                    </li>
                </ul>
                <div className="call-center">
                    <img src="https://cdn-icons-png.flaticon.com/512/1283/1283446.png"/>
                    <div className="callCenter-txt">
                        <div className="phone">123-456</div>
                        <p>24/7 Support Center</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}
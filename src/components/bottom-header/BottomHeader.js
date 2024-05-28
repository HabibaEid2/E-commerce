import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import './bottom_header.css'
export default function BottomHeader() {
    return (
        <div className="bottom-header">
            <Container fluid = "xxl">
                <ul>
                    <li>
                        <Link to = "/">Home</Link>
                    </li>
                    <li>
                        <Link to = "cat/groceries">Grocerires</Link>
                    </li>

                    <li>
                        <Link to= "cat/Electronics">Electronics</Link>
                    </li>
                    <li>
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
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import './bottom_header.css'
import data from './../../data/data'
import { Dropdown } from "react-bootstrap";
export default function BottomHeader() {
    let groceriesList = [] ; 
    let eleList = [] ;
    let fashionList = [] ;
    
    for(let i of data.productData) {
        for(let j of i.items) {
            if (i.cat_name === "groceries") groceriesList.push(<Dropdown.Item key={i.items.indexOf(j)}>{j.cat_name}</Dropdown.Item>)
            else if (i.cat_name === "Electronics") eleList.push(<Dropdown.Item key={i.items.indexOf(j)}>{j.cat_name}</Dropdown.Item>)
            else fashionList.push(<Dropdown.Item key={i.items.indexOf(j)}>{j.cat_name}</Dropdown.Item>)
        }
    }

    return (
        <div className="bottom-header">
            <Container fluid = "xxl">
                <ul>
                    <li>
                        <Link to = "/">Home</Link>
                    </li>

                    <li>
                        <Link to = "groceries"><Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">Grocerires</Dropdown.Toggle>
                                <Dropdown.Menu>{groceriesList}</Dropdown.Menu>
                            </Dropdown>
                        </Link>
                    </li>

                    <li>
                        <Link to= "electronics"><Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">Electronics</Dropdown.Toggle>
                                <Dropdown.Menu>{eleList}</Dropdown.Menu>
                            </Dropdown>
                        </Link>
                    </li>
                    <li>
                        <Link to= "fashion"><Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">Fashion</Dropdown.Toggle>
                                <Dropdown.Menu>{fashionList}</Dropdown.Menu>
                            </Dropdown>
                        </Link>
                    </li>
                    <li>
                        <Link to= "shop">Shop</Link>
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
import { Carousel, Container} from "react-bootstrap";
import './nav.css'
import Newsletter from "../../../components/newsletter/NewsLetter";
export default function NavBar() {
    return (
        <div className="navBar">
            <Container fluid = "xxl">
                <Carousel fade controls = {false}>
                    <Carousel.Item>
                        <Carousel.Caption>
                        <Newsletter className = "mainTitle"
                            title = "Fresh Vegetables Big Discount"
                            p = "Sign Up For The Daily Newsletter"
                            />
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <Newsletter
                            title = "Don't miss amazing grocery deals"
                            p = "Sign Up For The Daily Newsletter"
                            />
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
        
    ) ; 
    }
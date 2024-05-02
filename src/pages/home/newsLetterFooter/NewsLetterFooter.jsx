import { Container } from "react-bootstrap";
import Newsletter from "../../../components/newsletter/NewsLetter";
import './section.css' ; 
export default function NewsLetterFooter() {
    return (
        <Container fluid = "xxl">
            <div className="newsLetterFooter">
                <Newsletter 
                title = "Stay home & get your daily needs from our shop"
                p = "Start You'r Daily Shopping with Nest Mart"/>
            </div>
        </Container>
        
    )
}
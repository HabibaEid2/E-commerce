import { Container} from "react-bootstrap";
import dailySells from './../../../images/daily-sells-add.jpg'
import './bestSells.css'
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { bestSellsF } from "../../../redux/reducer";
export default function BestSells() {
    let [leftDisplay , setLeftDisplay] = useState("none") ; 
    let [rightDisplay , setRightDisplay] = useState("block") ; 
    let products = useSelector(state => state.bestSells.type) ; 
    let dispatch = useDispatch() ;  
    let content = useRef() ; 

    dispatch(bestSellsF()) ;     
    function scrollContent(e) {
        if (e.target.scrollLeft !== 0) {
            setLeftDisplay("block")
            setRightDisplay("block")
            console.log(
                `the count : ${Math.round(e.target.scrollLeft + e.target.offsetWidth)}
                scrollWidth : ${e.target.scrollWidth}
                `
            )
            if (Math.round(e.target.scrollLeft + e.target.offsetWidth) >= e.target.scrollWidth) {
                setRightDisplay("none")
            }                
        }
        else {
            setLeftDisplay("none") ; 
            setRightDisplay("block") ; 
        } 
    }
    function leftClick() {
        content.current.scrollBy(-200 , 0)
    }
    function rightClick() {
        content.current.scrollBy(200 , 0)
    }
    return(
        <div className="best-sells">
            <Container fluid = "xxl">
                <img src={dailySells} alt="add" className="add-img"/>
                <div>
                    <div className="content" onScroll={scrollContent} ref={content} style={{scrollBehavior : "smooth"}}>
                        {products}
                    </div>
                    <button className="button left" onClick={leftClick} style={{display : leftDisplay}}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button className="button right"  onClick={rightClick} style={{display : rightDisplay}}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </Container>
        </div>
    )
}
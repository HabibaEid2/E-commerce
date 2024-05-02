import { Container } from "react-bootstrap";
import ele from './../../../images/home-element.jpg'
import './homeSection.css'
export default function HomeSectoins() {
    let arrGroub = [] ; 
    for(let i = 0 ; i < 4 ; i++) {
        arrGroub.push(
        <div className="element" key={i}>
            <div className="image">
                <img src={ele}/>
            </div>
            <div className="content">
                <h6>Nestle Original Coffee-Mate Coffee Creamer</h6>
                <div className="rate">
                <i className="fa-solid fa-star"></i>
                </div>
                <div className="price">
                    <div className="newPrice">$28.85</div>
                    <div className="oldPrice">$32.8</div>
                </div>
            </div>
            
        </div>)
    }
    return (
        <div className="homeSections">
            <Container fluid = "xxl">
                <div className="content row g-5">
                <div className="top-selling col-sm-12 col-md-6 col-lg-3">
                    <div className="head">Top Selling</div>
                    <div className="section-content">{arrGroub}</div>
                </div>
                <div className="trendingProducts col-sm-12 col-md-6 col-lg-3">
                    <div className="head">Trending Products</div>
                    <div className="section-content">{arrGroub}</div>
                </div>
                <div className="recentlyAdded col-sm-12 col-md-6 col-lg-3">
                    <div className="head">Recently Added</div>
                    <div className="section-content">{arrGroub}</div>
                </div>
                <div className="topRated col-sm-12 col-md-6 col-lg-3">
                    <div className="head">Top Rated</div>
                    <div className="section-content">{arrGroub}</div>
                </div>
                </div>
                
            </Container>
        </div>
    )
}
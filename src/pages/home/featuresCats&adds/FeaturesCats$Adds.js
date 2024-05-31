import { Container } from "react-bootstrap";
import data from './../../../data/data';
import add1Img from './../../../images/hom-add-1.jpeg'
import add2Img from './../../../images/hom-add-2.jpeg'
import add3Img from './../../../images/hom-add-3.jpeg'
import './featuresCats$add.css' ; 
import { Link } from "react-router-dom";
export default function FeaturesCats$Adds() {
    let groceriesNum = 0 ; 
    let eleNums = 0 ; 
    let fashionNums = 0 ; 
    let featursArr = [] ; 
    for(let i of data.productData) {
        for(let j of i.items) {
            if (i.cat_name === "groceries") groceriesNum += j.products.length ; 
            else if (i.cat_name === "Electronics") eleNums += j.products.length ; 
            else fashionNums += j.products.length ; 
        }
        featursArr.push(
            <Link to = {`/cat/${i.cat_name}`}>
                <div key={data.productData.indexOf(i)} className="category" style={{backgroundColor : (i.cat_name == "groceries") ? "#fffceb" : i.cat_name == "Electronics" ? "rgb(236, 255, 236)" : "rgb(254, 239, 234)"}}>
                    <img src={i.image}/>
                    <div className="cat-title">{i.cat_name}</div>
                    <div className="productsNum">{(i.cat_name == "groceries") ? groceriesNum : i.cat_name == "Electronics" ? eleNums : fashionNums}</div>
                </div>
            </Link>
        )
    }
    return (
        <Container fluid = "xxl">
            <div className="featuresCats">
                <h3>Featurse Categories</h3>
                <div className="categories">
                    {featursArr}
                </div>
            </div>
            <div className="adds">
                <div className="add">
                    <img src={add1Img}/>
                </div>
                <div className="add">
                    <img src={add2Img}/>
                </div>
                <div className="add">
                    <img src={add3Img}/>
                </div>
            </div>
        </Container>
    )
}
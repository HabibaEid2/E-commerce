import { Container} from 'react-bootstrap'
import './popularProducts.css'
import { useDispatch, useSelector } from 'react-redux';
import data from '../../../data/data';
import { productsA } from '../../../redux/reducer';
import { useEffect, useRef, useState } from 'react';

export default function PopularProducs() {
    let [allSubCats , setAllSubCats]= useState([]) ; 
    let ulRef = useRef() ; 
    let dispatch = useDispatch() ;  
    let products = useSelector(state => state.productsData) ;


    useEffect(()  => {
        // craete all subsets of categories in buttons
        setAllSubCats([])
        for(let i of data.productData) {
            for(let j of i.items) {
                setAllSubCats((prev) => {
                    return [...prev , prev.length === 0 ? 

                        <li className='click'>
                            <button onClick={() => dispatch(productsA({catName : i.cat_name , subCat : j.cat_name}))}>
                                {j.cat_name}
                            </button >
                        </li> : 

                        <li>
                        <button 
                            onClick={(e) =>dispatch(productsA({catName : i.cat_name , subCat : j.cat_name}))}>
                            {j.cat_name}
                        </button >
                    </li>
                    ]
                })
            }
        }
    } , [])

    useEffect(() => {
    // but active class to lis'.
    let ulInHTML = ulRef.current.querySelectorAll(".popular-products ul li")
    for(let i of ulInHTML) {
        i.onclick = () => {
            for(let i of ulInHTML) {
                i.classList.remove("click") ; 
            }
            i.classList.add("click")
        }
    }
    })
    
    return(
        <div className='popular-products'>
            <Container fluid = "xxl">
                <div className='categories'>
                    <h5>Pupolar Products : </h5>
                    <ul ref={ulRef}>{allSubCats}</ul>
                </div>
                <div className='content'>
                    {products}
                </div>
            </Container>
        </div>
        
    )
}
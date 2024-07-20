import { Container} from 'react-bootstrap'
import './popularProducts.css'
import { useDispatch, useSelector } from 'react-redux';
import data from '../../../data/data';
import { listsOfProductsA } from '../../../redux/reducer';
import { useEffect, useRef, useState } from 'react';

export default function PopularProducs() {
    const [allSubCats , setAllSubCats]= useState([]) ; 
    const ulRef = useRef() ; 
    const dispatch = useDispatch() ;  
    const products = useSelector(state => state.listsOfProducts) ;
    const address = window.location.pathname.slice(1) ;

    useEffect(() => {
        dispatch(listsOfProductsA({catName : "groceries" , subCat : "dals and pulses"}))
    } , [])
    useEffect(()  => {
        // craete all subsets of categories in buttons
        setAllSubCats([])
        for(let i of data.productData) {
            for(let j of i.items) {
                setAllSubCats((prev) => {
                    return [...prev , prev.length === 0 ? 
                        <li className='click'>
                            <button 
                                onClick={() => dispatch(listsOfProductsA({catName : i.cat_name , subCat : j.cat_name}))}>
                                {j.cat_name}
                            </button >
                        </li> : 
                        <li>
                        <button 
                            onClick={() =>dispatch(listsOfProductsA({catName : i.cat_name , subCat : j.cat_name}))}>
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
            for(let i of ulInHTML) i.classList.remove("click") ; 
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
import { Container} from 'react-bootstrap'
import './popularProducts.css'
import { useDispatch, useSelector } from 'react-redux';
import data from '../../../data/data';
import { productsA } from '../../../redux/reducer';
export default function PopularProducs() {
    let dispatch = useDispatch() ;  
    let products = useSelector(state => state.productsData) ;
    let allSubCats =[] ; 
    for(let i of data.productData) {
        for(let j of i.items) {
            allSubCats.push(
                <button onClick={() => dispatch(productsA({catName : i.cat_name , subCat : j.cat_name}))}>{j.cat_name}</button >
            ) ; 
        }
    }
    return(
        <div className='popular-products'>
            <Container fluid = "xxl">
                <div className='categories'>
                    <div>Pupolar Products : </div>
                    <div>{allSubCats}</div>
                </div>
                <div className='content'>
                    {products}
                </div>
            </Container>
        </div>
        
    )
}
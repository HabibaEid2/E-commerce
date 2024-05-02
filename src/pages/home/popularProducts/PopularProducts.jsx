import { Container} from 'react-bootstrap'
import './popularProducts.css'
import { useDispatch, useSelector } from 'react-redux';
import { dalsApulsesF, gheeAoilsF, masalas_spicesF, menWWF, mobilesATF, rice_productsF, tvASpeakerF, womenWWF } from '../../../redux/reducer';
import { useEffect } from 'react';
export default function PopularProducs() {
    let dispatch = useDispatch() ;  
    let products = useSelector(state => state.productsData.type) ;
    useEffect(() => {
    dispatch(dalsApulsesF()) ;  
    } ,[]) ; 
    return(
        <div className='popular-products'>
            <Container fluid = "xxl">

                <div className='categories'>
                    <div>Pupolar Products : </div>
                    <div>
                    <button onClick={() => dispatch(dalsApulsesF())}>Dals And Pulses</button >
                        <button onClick={() => dispatch(gheeAoilsF())}>Ghee & Oils</button >
                        <button onClick={() => dispatch(masalas_spicesF())}>Masalas Spices</button >
                        <button onClick={() => dispatch(rice_productsF())}>Rice & Rice Products</button >
                        <button onClick={() => dispatch(mobilesATF())}>Mobiles & button s</button >
                        <button onClick={() => dispatch(tvASpeakerF())}>TV & Speaker</button >
                        <button onClick={() => dispatch(menWWF())}>Men Western wear</button >
                        <button onClick={() => dispatch(womenWWF())}>Women Western wear</button >
                    </div>
                </div>
                <div className='content'>
                    {products}
                </div>
            </Container>
        </div>
        
    )
}
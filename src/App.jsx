import './constant/css/bootstrap.min.css'
import './constant/css/all.min.css'
import Top_Header from './components/top-header/TopHeader';
import BottomHeader from './components/bottom-header/BottomHeader';
import { BrowserRouter, Route , Router, Routes } from 'react-router-dom';
import Home from './pages/home/Home'; 
import Footer from './components/footer/footer';
import NewsLetterFooter from './pages/home/newsLetterFooter/NewsLetterFooter';
import SignIn from './pages/register/SignIn';
import SignUp from './pages/register/SignUp';
import Product from './pages/product/Product';
import Items from './pages/items/Items';
import './App.css';
import { useEffect, useState } from 'react';
import Loading from './components/loading/Loading';
function App() {
  let [loading , setLoading] = useState(true) ;
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  } ,[])
  return (
    loading ? <Loading/> : 
    <div>
        <Top_Header/>
        <BottomHeader/>
          <Routes>
            <Route path='*' element = {<Home/>}/>
            <Route path='/E-commerce/' element = {<Home/>}/>
            <Route path='/products/:id' element = {<Product/>}/>
            <Route path='/cat/*' element = {<Items/>}/>
            <Route path='sign-in' element = {<SignIn/>}/>
            <Route path='sign-up' element = {<SignUp/>}/>
          </Routes>
        <NewsLetterFooter/>
        <Footer/>
    </div>
        )
}

export default App;

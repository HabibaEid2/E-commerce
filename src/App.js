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
import './App.css';
function App() {
  return (
    <>
    <Top_Header/>
    <BottomHeader/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/products/:id' element = {<Product/>}/>
        <Route path='sign-in' element = {<SignIn/>}/>
        <Route path='sign-up' element = {<SignUp/>}/>
      </Routes>
    <NewsLetterFooter/>
    <Footer/>
    </>
  )
}

export default App;

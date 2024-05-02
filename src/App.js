import './constant/css/bootstrap.min.css'
import './constant/css/all.min.css'
import './App.css';
import Top_Header from './components/top-header/TopHeader';
import BottomHeader from './components/bottom-header/BottomHeader';
import { Route , Routes } from 'react-router-dom';
import Home from './pages/home/Home'; 
import RegisterIn from './pages/register/RegisterIn'
import Footer from './components/footer/footer';
import NewsLetterFooter from './pages/home/newsLetterFooter/NewsLetterFooter';
function App() {
  return (
    <>
    <Top_Header/>
    <BottomHeader/>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='sign-in' element = {<RegisterIn/>}/>
    </Routes>
    <NewsLetterFooter/>
    <Footer/>
    </>
  )
}

export default App;

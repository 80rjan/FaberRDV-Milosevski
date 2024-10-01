
import './App.css'
import {Route, Routes, useLocation} from "react-router-dom";

import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Molds from "./pages/Molds.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Navigation from './elements/Navigation'
import Footer from "./elements/Footer.jsx";
import {useEffect} from "react";

function App() {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

  return (
    <>
      <Navigation />
        <div className='App'>
            <Routes >
                <Route path='/' element={<Home /> } />
                <Route path='/products' element={<Products /> } />
                <Route path='/molds' element={<Molds /> } />
                <Route path='/about' element={<About /> } />
                <Route path='/contact' element={<Contact /> } />
            </Routes>
        </div>
        <Footer />
    </>
  )
}

export default App

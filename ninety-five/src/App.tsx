import React, {useRef, useState} from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Nav from './components/Nav';
import Shop from './components/Shop';
import GlobalCss from './styles/global'
import "swiper/css/bundle";
import Spinner from './components/Spinner';


function App() {
  const [isLoading, setIsLoading] = useState(false);
  window.onload = function(){
    setIsLoading(true);
    setTimeout(() => {
        setIsLoading(false);
       }, 5000);
    setIsLoading(false);
 };
  
  return (
    <>
    {isLoading? ( <Spinner /> ): (
      <>
      <GlobalCss />
      <Header />
      <Nav />
      <Home />
      <Shop />
      <About />
      {/* <Contact /> */}
      <Footer/>
      </>
      )}
    </>
  );
}

export default App;

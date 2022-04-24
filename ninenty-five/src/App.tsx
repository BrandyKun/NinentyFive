import React from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Nav from './components/Nav/Nav';
import Shop from './components/Shop';
import GlobalCss from './styles/global'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <Nav />
      <Home />
      <Shop />
      <About />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;

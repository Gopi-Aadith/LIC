import React from 'react';
import { Element } from 'react-scroll';
import Navbar from './Components/Header/Navbar';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Services from './Components/Pages/Services/Services';
import Contact from './Components/Pages/Contact/Contact'
import './app.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Element name="home" className="section">
        <Home />
      </Element>
      <Element name="about" className="section">
        <About />
      </Element>
      <Element name="services" className="section">
        <Services/>
      </Element>
      <Element name='contact' className="section">
        <Contact/>
      </Element>
    </div>
  );
}

export default App;

import React from "react";
import './index.css'
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar.js";
import Hero from './Component/Hero/Hero.js'
import About from './Component/About/About.js'
import Skills from "./Component/Skills/Skills.js";
import Contact from "./Component/Contact/Contact.js";
import Footer from "./Component/Footer/Footer.js";
import Work from "./Component/Work/Work.js";



function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     </BrowserRouter>
     <div className="container">
      <Hero/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/> 
      <Footer/>

     </div>
    </div>
  );
}

export default App;

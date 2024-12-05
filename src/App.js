import React from "react";
import './index.css'
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar.js";
import Hero from './Component/Hero/Hero.js'
import Contact from "./Component/Contact/Contact.js";
import Expertise from "./Component/Expertise/Expertise.js";
import Experience from './Component/Experience/Experience.js'
import Project from './Component/Project/Project.js'
// import Footer from "./Component/Footer/Footer.js";




function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     </BrowserRouter>
     <div className="container">
      <Hero/>
      <Expertise/>
      <Project/>
      <Experience/>
      <Contact/> 
      {/* <Footer/> */}

     </div>
    </div>
  );
}

export default App;

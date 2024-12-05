import React from 'react'
import './Hero.css'
// import Link from "react-router-dom";
import { Link } from 'react-scroll';



const Hero = () => {
 return(
  <div className='hero'>
  <div class="dark fire">
     <h1 class="Blazing" contenteditable="true">Ajibare Babajide B.</h1>
   </div>
   <div className='hero_content'>
      <p>WORDPRESS &amp; FRONT END DEVELOPER</p>
   </div>
   <div className='hireme'>   
       <Link to="contact" smooth={true} duration={500}><button className='need'>I need a website &#10148;</button></Link>
       {/* <Link to="contact" smooth={true} duration={500}><button className='looking'>I'm looking to hire &#10148;</button></Link> */}
       <a 
          href="mailto:babajideajibare@gmail.com?subject=Hiring%20Enquiry&body=Hello%20Ajibare%2C%0A%0AI%27m%20interested%20in%20hiring%20you%20for%20a%20project.%20Let%27s%20discuss%20further.%0A%0ARegards%2C%0A%5BYour%20Name%5D"
          target="_blank" 
          rel="noopener noreferrer"
        >  <button className="looking">I'm looking to hire &#10148;</button></a>
   </div>
   <Link to="target-section" smooth={true} duration={500}>
        <div className="indicator">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Link>

   {/* <div class="indicator">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
   </div> */}
</div>
 )

}

export default Hero

//   const [herotitle] = useTypewriter({
//     words: [
//     'Frontend Developer.',
//     'JavaScript Developer.',
//     'WordPress Developer.',
//     'React Developer.',
//     'Responsive Design Expert.',
//     'Frontend Developer.',],
//     loop: 7,
//     deleteSpeed: 30,
//     delaySpeed: 1000,
//     cursor: true, 
//     cursorStyle: '|',
    
   
//   })

//   const fullText = 'I am a creative and detail-oriented frontend developer, passionate about building responsive, user-friendly web interfaces using modern technologies like React, while continuously learning and adapting to new challenges.';

//   useEffect(() => {
//     let currentIndex = 0;

//     const interval = setInterval(() => {
//       setHero(prevHero => ({
//         ...prevHero,
//         heroText: fullText.substring(0, parseFloat(currentIndex))
//       }));
//       currentIndex += 7; 
//       if (currentIndex > fullText.length) {
//         clearInterval(interval); 
//       }
//     }, 40); 

//     return () => clearInterval(interval);
//   }, []);

//   const [hero, setHero] = useState({
//     // code : '<h1>',
//     welcome: 'WEBSITE DONE RIGTH',
//     greetings : 'Hi, my name is ',
//     heroName : "Ajibare Babajide B.",
//     heroText : '',
//   })

//   const { welcome, greetings, heroName, heroText} = hero
//   // const {code, greetings, heroName, heroText} = hero
 
//   return (
//     <div className='hero' id='/'>
//       <div className='hero-text'>
//       <h1 className='hire show'>Hire a remote Unicon Dev</h1>
//         {/* <p className='code'>{code}</p> */}
//         <p className='code'>{welcome}</p>
//         <p className='greeting'>{greetings}</p>
//         <h1 className='heroname'>{heroName}</h1>
//         <h1 className='herotitle'>a {herotitle}<Cursor cursorColor='#800020'/></h1>
//         <p className='herotext'>{heroText}</p>
//         <ul className='react-icon'>
//           <li><a href="https://www.linkedin.com/in/ajibare-babajide-94452a248/"><FaLinkedinIn size={35} color='#8892B0'/></a></li>
//           <li><a href="https://x.com/SmartAbjob"><FaTwitter size={35} color='#8892B0'/></a></li>
//           <li><a href="https://github.com/Ajibare"><FaGithub size={35} color='#8892B0'/></a></li>
//         </ul>
//        <div className='hireme'>   
//        <a href=""><button>I need a website </button></a>
//        <a href=""><button>I'm looking to hire</button></a>
//        </div>
//       </div>
//       {/* <div className='hero-img'>
//       <h1 className='hire hide'>Hire a remote       Unicon Dev</h1>
//         <img src={dev} alt="babajide" />
//       </div> */}
//       <div class="dark fire">
//         <h1 class="Blazing" contenteditable="true">
//         ABjob
//         </h1>
//   </div>
      
//     </div>
//   )

// }

// export default Hero

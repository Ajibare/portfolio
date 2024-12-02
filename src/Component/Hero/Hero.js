import React, { useState, useEffect } from 'react'
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import './Hero.css'
import dev from '../../Asset/ABjob.png'
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';




const Hero = () => {

  const [herotitle] = useTypewriter({
    words: [
    'Frontend Developer.',
    'JavaScript Developer.',
    'WordPress Developer.',
    'React Developer.',
    'Responsive Design Expert.',
    'Frontend Developer.',],
    loop: 7,
    deleteSpeed: 30,
    delaySpeed: 1000,
    cursor: true, 
    cursorStyle: '|',
    
   
  })

  const fullText = 'I am a creative and detail-oriented frontend developer, passionate about building responsive, user-friendly web interfaces using modern technologies like React, while continuously learning and adapting to new challenges.';

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      setHero(prevHero => ({
        ...prevHero,
        heroText: fullText.substring(0, parseFloat(currentIndex))
      }));
      currentIndex += 7; 
      if (currentIndex > fullText.length) {
        clearInterval(interval); 
      }
    }, 40); 

    return () => clearInterval(interval);
  }, []);

  const [hero, setHero] = useState({
    code : '<h1>',
    greetings : 'Hi, my name is ',
    heroName : "Ajibare Babajide B.",
    heroText : '',
  })

  const {code, greetings, heroName, heroText} = hero
 
  return (
    <div className='hero' id='/'>
      <div className='hero-text'>
      <h1 className='hire show'>Hire a remote Unicon Dev</h1>
        <p className='code'>{code}</p>
        <p className='greeting'>{greetings}</p>
        <h1 className='heroname'>{heroName}</h1>
        <h1 className='herotitle'>a {herotitle}<Cursor cursorColor='#800020'/></h1>
        <p className='herotext'>{heroText}</p>
        <ul className='react-icon'>
          <li><a href="https://www.linkedin.com/in/ajibare-babajide-94452a248/"><FaLinkedinIn size={35} color='#8892B0'/></a></li>
          <li><a href="https://x.com/SmartAbjob"><FaTwitter size={35} color='#8892B0'/></a></li>
          <li><a href="https://github.com/Ajibare"><FaGithub size={35} color='#8892B0'/></a></li>
        </ul>
      </div>
      <div className='hero-img'>
      <h1 className='hire hide'>Hire a remote Unicon Dev</h1>
        <img src={dev} alt="babajide" />
      </div>
      
    </div>
  )
}

export default Hero

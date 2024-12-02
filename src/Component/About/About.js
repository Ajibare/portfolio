import React from 'react'
import './About.css'
import Title from  '../Title/Title'

const About = () => {

  const text = '</h1>'
  return (
    <>
    <Title title='About' />
    <div className='about' id='/about'>
    <div className="about-dev">
      <h1 className='about-hello'>
        Hi<span>&#128075;</span>,
         I'm Ajibare Babajide, nice to meet you. Please take a look around.</h1>
      <p className='about-me'>
        I'm a skilled and innovative frontend developer proficient in HTML, CSS, JavaScript, React and Wordpress, with expertise in building responsive, dynamic and user-centered web applications and a passion for creating fast, efficient and visually stunning digital experience.
        Proven track record in delivering engaging user interface and contributing to user experience enhancement.
      </p>
    </div>

      <p className='code'>{text}</p>
    </div>
    </>
  )
}

export default About

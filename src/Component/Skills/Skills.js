import React from 'react'
import './Skills.css'
import Title from '../Title/Title'
import git from '../../Asset/github-e59bf158.png'
import html from '../../Asset/html-d20c9482.png'
import css from '../../Asset/css-4040bdba.png'
import js from '../../Asset/javascript-d04a05c4.png'
import react from '../../Asset/react-e00184ba.png'
import boot from '../../Asset/boot.png'




const Skills = () => {
  return (
    <>
      <Title title='Skills'/>
      <p className='work'  id='/skill'>\\ These are the technologies have worked with</p>
      <div className='skills'>
        <div className='icon'>
        <img src={html} alt="html" />
        <p className='skill-title'>HTML</p>
        </div>
        <div className='icon'>
        <img src={css} alt="css" />
        <p className='skill-title'>css</p>
        </div>
        <div className='icon'>
        <img src={js} alt="js" />
        <p className='skill-title'>javascript</p>
        </div>
        <div className='icon'>
        <img src={git} alt="git" />
        <p className='skill-title'>github</p>
        </div>
        <div className='icon'>
        <img src={react} alt="react" />
        <p className='skill-title'>react</p>
        </div>
        <div className='icon'>
        <img src={boot} alt="bootstrap" />
        <p className='skill-title'>bootstrap</p>
        </div>
      </div>
      
    </>
  )
}

export default Skills

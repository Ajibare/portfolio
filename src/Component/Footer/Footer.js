import React from 'react'
import './Footer.css'

const Footer = () => {
  const time = new Date().getFullYear()
  return (
   <>
    <footer>
    <p className='footer-color'>Copyright&copy; {time}, Ajibare Babajide Blessing. All Right Reserved </p>
    </footer>
   </>
  )
}

export default Footer;

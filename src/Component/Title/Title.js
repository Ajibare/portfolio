import React from 'react'
import './Titl.css'

const Title = ({title}) => {
  return (
    <div className='title'>
      <h1>{title}</h1>
      <div className="underline"></div>
    </div>
  )
}

export default Title

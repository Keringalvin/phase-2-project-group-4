import React from 'react'
import '../styles/BrewDisplay.css'

const BrewDisplay = ({brew}) => {

  return (
    <div className='brew-display-container'>
      <h1>{brew.name}</h1>
      <h2>{brew.phone}</h2>
      <a href={brew.website_url} target='_blank'>Link to Brand</a>
    </div>
  )
}

export default BrewDisplay
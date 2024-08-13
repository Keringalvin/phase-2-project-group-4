import React from 'react'

const BrewDisplay = ({brew}) => {

  return (
    <div>
      <h1>{brew.name}</h1>
      <h2>{brew.phone}</h2>
      <a href={brew.website_url}>Link to Brand</a>
    </div>
  )
}

export default BrewDisplay
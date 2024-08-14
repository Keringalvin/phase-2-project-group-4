import React, { useEffect, useState } from 'react'
import BrewDisplay from './BrewDisplay'
import '../styles/Home.css'

const Home = () => {

// const url = `https://api.openbrewerydb.org/breweries`

const [breweries, setBreweries]=useState([])

useEffect(()=>{
  fetch('https://group-project-api.vercel.app/breweries')
  .then(res =>res.json())
  .then(breweries => setBreweries(breweries))
},[])

const display = breweries.map(
  brew => 
    <div className='brew-display' key={brew.id}>
  <BrewDisplay brew={brew}  setBreweries={setBreweries}/>
  </div>
)
  return (
    <div className='home-container'>
      {display}
    </div>
  )
}

export default Home

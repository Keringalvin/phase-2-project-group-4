import React, { useEffect, useState } from 'react'
import BrewDisplay from './BrewDisplay'

const Home = () => {

// const url = `https://api.openbrewerydb.org/breweries`

const [breweries, setBreweries]=useState([])

useEffect(()=>{
  fetch('https://api.openbrewerydb.org/breweries')
  .then(res =>res.json())
  .then(breweries => setBreweries(breweries))
},[])

const display = breweries.map(
  brew => <BrewDisplay brew={brew} key={brew.id} setBreweries={setBreweries}/>
)
  return (
    <div>
      {display}
    </div>
  )
}

export default Home
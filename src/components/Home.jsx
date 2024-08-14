import React, { useEffect, useState } from 'react'
import BrewDisplay from './BrewDisplay'
import Form from './Form'
import Navbar from './Navbar'

const Home = () => {

// const url = `https://api.openbrewerydb.org/breweries`

const [breweries, setBreweries]=useState([])

useEffect(()=>{
  fetch('https://group-project-api.vercel.app/breweries')
  .then(res =>res.json())
  .then(breweries => setBreweries(breweries))
},[])

const display = breweries.map(
  brew => <BrewDisplay brew={brew} key={brew.id} setBreweries={setBreweries}/>
)
  return (
    <div>
      {/* <Navbar/> */}
      {/* <Form /> */}
      {display}
    </div>
  )
}

export default Home

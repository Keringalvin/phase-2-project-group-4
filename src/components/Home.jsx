import React, { useEffect, useState } from 'react'
import BrewDisplay from './BrewDisplay'
import '../styles/Home.css'

const Home = () => {

// const url = `https://api.openbrewerydb.org/breweries`

const [breweries, setBreweries]=useState([])
const [search, setSearch] = useState("")

useEffect(()=>{
  fetch('https://group-project-api.vercel.app/breweries')
  .then(res =>res.json())
  .then(breweries => setBreweries(breweries))
},[])


const handlesSearch = e => {
  setSearch(e.target.value)
}

const filteringBrands = breweries.filter(brewery => 
  brewery.name.toLowerCase().includes(search.toLowerCase())
)

const display = filteringBrands.map(
  brew => 
    <div className='brew-display' key={brew.id}>
  <BrewDisplay brew={brew}  setBreweries={setBreweries}/>
  </div>
)

  return (
    <div className='home-container'>
      <div className='search'>
      <input 
      type='text'
      placeholder='Search Brand'
      value={search}
      onChange={handlesSearch}
      />
      </div>
      {display}
    </div>
  )
}

export default Home

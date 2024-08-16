import React, { useEffect, useState } from 'react'
import BrewDisplay from './BrewDisplay'
import '../styles/Home.css'
import { Link } from 'react-router-dom'


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
      <img  src='https://images.unsplash.com/photo-1584225065152-4a1454aa3d4e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='A brew photo'/>
      {/* <caption style={{color: `white`}}>Hi there</caption> */}
      <div className='words'>
      <p style={{color: 'white'}}>Brewed with care and passion, our beers offer a unique taste experience. Savor each flavor as it unfolds, and let every sip bring you closer to the heart of true craftsmanship. Cheers to quality and tradition!</p>
      </div>
      <div className='introduction'>
        <p style={{color:`white`}}>
        Explore a curated selection of top-notch brewery brands, each known for their unique flavors and exceptional quality. From time-honored classics to innovative new brews, our collection showcases the best of the craft beer world. Discover the stories behind each brand and find your new favorite brew.
        </p>
      </div>
      <div>
      <div className='search-bar'>
      <input 
      type='text'
      placeholder='Search Brand'
      value={search}
      onChange={handlesSearch}
      />
      </div>
      <div className='fetcher'>

      {display}
      </div>
      <div className='to-form'>
      <Link to='/form'> Are you interested in adding your brand</Link>
      </div>
      <div className='ending'>
        <p style={{color:`white`}}>
        Thank you for exploring our collection of distinguished brewery brands. We hope you’ve enjoyed discovering the rich variety and craftsmanship each brand has to offer. Cheers to finding your perfect brew and to many more exceptional moments ahead. Stay tuned for more updates and new additions!
        </p>

      </div>
      </div>
    </div>
  )
}

export default Home

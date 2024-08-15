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
      <img className='' src='https://images.unsplash.com/photo-1584225065152-4a1454aa3d4e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      {/* <caption>Hi there</caption> */}
      <div className='words'>
        <p style={{color: `white`}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci nobis minus cumque illo voluptates aliquam provident a. Libero impedit eius labore praesentium nulla, eveniet est tempore eligendi delectus maxime incidunt!</p>
      </div>
      <div className='introduction'>
        <p style={{color:`white`}}>
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam, rem, maxime temporibus autem ex dolorem dolorum provident totam sapiente est mollitia nisi! Hic aperiam aut odit ipsa in perferendis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab iusto a inventore deserunt aperiam temporibus laudantium esse possimus, voluptates odio fuga, obcaecati, veniam voluptatem nesciunt quae molestias repellendus odit totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dicta cumque suscipit assumenda perspiciatis nam provident impedit deserunt necessitatibus blanditiis? Totam facilis perferendis at veritatis quis nesciunt numquam veniam. Recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nesciunt non ab fuga, quod deleniti perferendis dolore natus distinctio, commodi magni hic maxime porro recusandae libero debitis, doloremque animi molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, esse facilis. Iste amet recusandae, non earum veritatis quod iure, minus voluptatibus neque molestiae incidunt sit corrupti, dignissimos quidem voluptatum alias.
        </p>
      </div>
      
      <div className='fetcher'>
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
    </div>
  )
}

export default Home

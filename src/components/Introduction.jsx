import React from 'react'
import '../styles/Introduction.css'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Introduction = () => {
  return (
    <>
    <div className='cover'>
      <img src='https://images.unsplash.com/photo-1462664450306-25ad625a342b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
    <div className='intro'>
    <h3>Discover the essence of craft brewing with our finest selection. Each brew is crafted with passion, using the highest quality ingredients to create unique flavors. Join us in celebrating the art of brewing and savor a taste that tells a story.</h3>
    <p>Discover the art of brewing with our expertly crafted beers. Each brew is made with premium ingredients, offering rich, distinctive flavors that cater to both connoisseurs and casual drinkers. Join us to savor a unique and enjoyable drinking experience that highlights our commitment to quality and craftsmanship.</p>
    <Link to='/home'>Want to see more</Link>
    </div>
    {/* <Footer/> */}
    </>
  )
}

export default Introduction
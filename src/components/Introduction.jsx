import React from 'react'
import '../styles/Introduction.css'
import { Link } from 'react-router-dom'

const Introduction = () => {
  return (
    <>
    <div className='cover'>
      <img src='https://images.unsplash.com/photo-1462664450306-25ad625a342b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
    <div className='intro'>
      <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia perferendis sunt, rerum in veritatis praesentium. Cumque quod a repudiandae! Est, consequuntur asperiores atque quidem quaerat totam nihil architecto tempore voluptate.</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ea vero doloremque quia asperiores. Quam fuga explicabo et amet, animi iure earum sed asperiores, minus at sapiente mollitia ipsum ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quas at omnis amet laboriosam? Incidunt, corrupti! Repellendus eveniet dolor ducimus odio, veniam, minima ullam libero, eos harum blanditiis amet nesciunt?</p>
    <Link to='/home'>Want to see more</Link>
    </div>
    </>
  )
}

export default Introduction
import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

const Home = () => {
  return (
    <div className=''>
        <Navbar/>
        <div id='home' className=' h-full w-full bg-white flex-col'>
        <Hero />
        </div>
    </div>
  )
}

export default Home
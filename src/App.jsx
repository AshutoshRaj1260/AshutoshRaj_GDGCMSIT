import React from 'react'
import { useState } from 'react'
import ScrollProgressBar from './ScrollProgressBar'
import './App.css'
import Landingpage from './Landingpage'
import About from './About'
import CardSection from './CardSection'
import Navbar from './Navbar'
import Carousel from './Carousel'

function App() {

  const [mode, setmode] = useState('light');

  return (
    <div className={`w-full font-sans ${mode==='light'? 'bg-white' : 'bg-color14'}`}>
      <Navbar mode={mode} setmode={setmode}/>
      <ScrollProgressBar />
      <Landingpage mode={mode}/>
      <About />
      <CardSection />
      <div className='w-screen flex flex-col items-center mt-40'>
        <h4 className='gradient-text'>Explore Top Destinations</h4>
        <p className={`${mode==='light'? 'text-black' : 'text-white'}`} >Explore your dream places around the world. Here you can find your perfect destination.</p>
      </div>
        <Carousel />
      <div className='h-72'></div>
    </div>
  )
}

export default App
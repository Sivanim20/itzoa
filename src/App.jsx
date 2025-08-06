import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Marketing from './components/Marketing'
import Choose from './components/Choose'
import LatestWork from './components/LatestWork'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div >
      <Navbar />
      <Hero/>
      <Featured/>
      <Marketing/>
      <Choose/>
      <LatestWork/>
      <Testimonials/>
    </div>
  )
}

export default App
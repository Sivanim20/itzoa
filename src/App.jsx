import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Marketing from './components/Marketing'
import Choose from './components/Choose'
import LatestWork from './components/LatestWork'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Services from './components/Services'

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Featured/>
      <Marketing/>
      <Choose/>
      <LatestWork/>
      <Services/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import FeaturedHotel from './Components/FeaturedHotel/FeaturedHotel'
import OffersAndTestimonials from './Components/OffersAndTestimonials/OffersAndTestimonials'
import Newsletter from './Components/Newsletter/Newsletter'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FeaturedHotel/>
      <OffersAndTestimonials/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default App
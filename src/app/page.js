import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import Body from '@/components/Body/Body'
import WhyChooseUs from '@/components/WhyUs/WhyUs'
import Testimonials from '@/components/Testimonals/Testimonals'
import Footer from '@/components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <br/>
      <Body/>
      <br/>
      <WhyChooseUs/>
      <br/>
      <Testimonials/>
      <br/>
      <Footer/>
    </div>
  )
}

export default Home

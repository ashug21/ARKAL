import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import Body from '@/components/Body/Body'
import WhyChooseUs from '@/components/WhyUs/WhyUs'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <br/>
      <Body/>
      <br/>
      <WhyChooseUs/>
    </div>
  )
}

export default Home

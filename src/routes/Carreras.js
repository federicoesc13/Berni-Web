import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import	Heroimage from '../components/HeroImage'
import CarrerasCards from '../components/Carreras'

const Carreras = () => {
  window.scrollTo(0,0);
  return (
    <div>
        <Navbar />
        <Heroimage heading='CARRERAS.' text='Lorem ipsum' />
        <CarrerasCards />
        <Footer />
    </div>
  )
}

export default Carreras
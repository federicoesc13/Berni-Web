import React from 'react'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HistoriaSection from '../components/Historia'

const Historia = () => {
  window.scrollTo(0,0);
  return (
    <div>
      <Navbar />
      <HeroImage heading='HISTORIA' text='Conocenos' />
      <HistoriaSection />
      <Footer />
    </div>
  )
}

export default Historia
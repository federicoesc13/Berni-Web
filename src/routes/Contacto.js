import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage2 from '../components/HeroImage2'
import Footer from '../components/Footer'
import Form from '../components/Form'

const Contacto = () => {
  window.scrollTo(0,0);
  return (
    <div>
        <Navbar />
        <HeroImage2 heading='CONTACTO' text='Contacta a la Escuela' />
        <Form />
        <Footer />
    </div>
  )
}

export default Contacto
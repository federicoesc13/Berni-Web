import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import Posts from '../components/Posts/Posts'

const Blog = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading='Blog' text="Noticias y Comunicados" />
        <Posts />
        <Footer />
    </div>
  )
}

export default Blog
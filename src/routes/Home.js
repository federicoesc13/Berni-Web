import React from 'react'
import Navbar from '../components/Navbar'
import Video from '../components/Video'
import Footer from '../components/Footer'

const Home = () => {
  window.scrollTo(0,0);
  return (
    <div>
        <Navbar/>
        <Video />
        <Footer />
    </div>
  )
}

export default Home
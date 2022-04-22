import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import SinglePost from '../../components/SinglePost'


const singlePostPage = () => {
  window.scrollTo(0,0);
  return (
    <>
    <Navbar/>
    <div className='single'>
    <SinglePost />
    </div>
    <Footer />
    </>
    
  )
}

export default singlePostPage
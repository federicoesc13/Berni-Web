import React from 'react'
import './VideoStyles.css'
import {Link} from 'react-router-dom'

import GradientVideo from '../assets/GradientVideo.mp4'

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={GradientVideo} type='video/mp4' />
        </video>
    <div className='content'>
        <h1>Antonio Berni</h1>
        <p>Escuela de Artes</p>
    <div>
        <Link to='/Carreras' className='btn'>Carreras</Link>
        <Link to='/Contacto' className='btn btn-light'>Contacto</Link>
    </div>
    </div>
    </div>

  )
}

export default Video
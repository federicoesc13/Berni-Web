import React from 'react'
import './FooterStyles.css'
import {FaFacebook, FaInstagram, FaMailBulk, FaPhone, FaSearchLocation} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color:'#ffffff', marginRight:'2rem'}} />
                    <div>
                        <p>Tucumán 130</p>
                        <h4>San Martin, Buenos Aires</h4>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color:'#ffffff', marginRight:'2rem'}} />011-4724-0302</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color:'#ffffff', marginRight:'2rem'}} />ejemplo@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>Acerca de la Escuela</h4>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
                <div className='social'>
                     <a target="_blank" href="https://www.facebook.com/antonio.berni.311"><FaFacebook size={30} style={{color:'#ffffff', marginRight:'1rem'}} /></a>
                     <a target="_blank" href="https://www.instagram.com/laberniok/"><FaInstagram size={30} style={{color:'#ffffff', marginRight:'1rem'}} /></a>              
                </div>            
            </div>
        </div>
    </div>
  )
}

export default Footer
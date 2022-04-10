import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/Untitled-1.png'

import './NavbarStyles.css'

const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <div className='header'>
        <Link to='/'><img src={Logo}></img></Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to='/Carreras'>Carreras</Link>
            </li>
            <li>
                <Link to='/Contacto'>Contacto</Link>
            </li>
            <li>
                <Link to='/Blog'>Blog</Link>
            </li>
            <li>
                <Link to='/Historia'>Historia</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color:'#fff'}} />) : (<FaBars size={20} style={{color:'#fff'}} />)}
        </div>
    </div>
  )
}

export default Navbar
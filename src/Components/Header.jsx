import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import logo from '../assets/movieinfo-sinFondo.png'

const Header = () => {

  

  return (
    <div className='headerContainer'>
      <section className='header__section'>
        <img src={logo} alt="logo" className='header__logo'/>
        <button className='header__btnMenu'><FontAwesomeIcon icon={faBars} className='header__menuIcon'/></button>
      </section>
    </div>
  )
}

export default Header
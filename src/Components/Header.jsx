import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/movieinfo-sinFondo.png'
import Menu from './Menu'

const Header = () => {

  // const [menu, setMenu] = useState([])
  const [openMenu, setOpenMenu] = useState(false)

  const closeMenu = () => {
    setOpenMenu(false)
}

const toOpenMenu = () => {
  setOpenMenu(true)
}

  return (
    <>
    <div className='headerContainer'>
      <section className='header__section'>
        <img src={logo} alt="logo" className='header__logo'/>
        <p>Welcome to Movie Info</p>

        <div className='navbar__container'>
            <NavLink to={'/home'} className='header__navbarOptions active'>Home</NavLink>
            <NavLink to={'/random'} className='header__navbarOptions active'>Random</NavLink>
            <NavLink to={'/movies'} className='header__navbarOptions active'>Movies</NavLink>
            <NavLink to={'/series'} className='header__navbarOptions active'>Series</NavLink>
            <NavLink to={'/'} className='header__navbarOptions active'>Sign out</NavLink>
        </div>

        <button 
          className='header__btnMenu'
          onClick={toOpenMenu}
        >
          <FontAwesomeIcon icon={faBars} className='header__menuIcon'/>
        </button>

        {
          <Menu
            openMenu={openMenu}
            closeMenu={closeMenu}
          />

        }
        
      </section>
    </div>
    
    </>


  )
}

export default Header
import { faArrowRightFromBracket, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/movieinfo-sinFondo.png'
import Menu from './Menu'

<FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />

const Header = () => {

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
            <NavLink to={'/home'} className='header__navbarOptions' activeclassname='active'>Home</NavLink>
            <NavLink to={'/random'} className='header__navbarOptions' activeclassname='active' >Random</NavLink>
            <NavLink to={'/movies'} className='header__navbarOptions' activeclassname='active'>Movies</NavLink>
            <NavLink to={'/series'} className='header__navbarOptions' activeclassname='active'>Series</NavLink>
            <NavLink to={'/'} className='header__navbarOptions signOutIcon' activeclassname='active'><FontAwesomeIcon icon={faArrowRightFromBracket}/></NavLink>
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
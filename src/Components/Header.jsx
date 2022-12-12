import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import logo from '../assets/movieinfo-sinFondo.png'
import Menu from './Menu'

const Header = ({petitionRandom}) => {

  const [menu, setMenu] = useState([])
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
        {/* <button onClick={petitionRandom}>Random</button> */}
        
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
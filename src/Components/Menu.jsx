import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = ({openMenu, closeMenu}) => {

    const handleMenuClick = (e) => {
        e.stopPropagation();
    }

  return (
    <>
    <div 
        className={`menu ${openMenu && 'menu-open'}`} 
        onClick={closeMenu}
    >
        <div className='menu_dialog' onClick={handleMenuClick}>
            <NavLink to={'/home'} className='navLinks'>Home</NavLink>
            <NavLink to={'/random'} className='navLinks'>Random</NavLink>
            <NavLink to={'/movies'} className='navLinks'>Movies</NavLink>
            <NavLink to={'/series'} className='navLinks'>Series</NavLink>
            <NavLink to={'/'} className='navLinks'>Sign out</NavLink>
            
        </div>
    </div>
    </>
  )
}

export default Menu
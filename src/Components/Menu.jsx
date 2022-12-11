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
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/random'}>Random</NavLink>
            <NavLink to={'/movies'}>Movies</NavLink>
            <NavLink to={'/series'}>Series</NavLink>
            <p>Cerrar Sesión</p> 
        </div>
    </div>
    </>
  )
}

export default Menu

        // <div className={`modal ${openModal && 'modal-open'}`} onClick={closeModal}>
        //     <div className='modal_dialog' onClick={handleModalDialogClick}>
        //         <button onClick={closeModal} className="closeButtonModal">
        //             <FontAwesomeIcon icon={faCircleXmark} className="iconCloseModal" />
        //         </button>
        //         {children}
        //     </div>
        // </div>
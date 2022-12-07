import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/movieinfo-sinFondo.png'

const Register = () => {
  return (
    <>
    <section className='loginDiv'>
        <img src={logo} alt="logo" className='login__logo'/>
        <p className='login__p'>Registrate</p>
      
      <form className='login__inputSection'>
          <label className='login__label login__label--name'>Nombre</label>
          <input 
          type="text" 
          placeholder='Nombre'
          className='login__input login__input--name'
          />
          <label className='login__label login__label--email'>Email</label>
          <input 
          type="Email" 
          placeholder='Email'
          className='login__input login__input--email'
          />
        <button className='login__button'>Registrate</button>
      </form>

    <div className='login__pHaveCount'>
      <p>Ya tienes una cuenta?</p>
      <NavLink to='/' className='login__Navlink'>Inicia sesión aquí</NavLink>
    </div>
      
    </section>
  </>
  )
}

export default Register
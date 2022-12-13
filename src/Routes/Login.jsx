import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/movieinfo-sinFondo.png'
import { useForm } from 'react-hook-form'

const Login = () => {

  const { handleSubmit } = useForm()
  const navegate = useNavigate()

  const validateUser = () => {
    navegate('/home')
  }

  return (
    <>
      <section className='loginDiv'>
          <img src={logo} alt="logo" className='login__logo'/>
          <p className='login__p'>Iniciar Sesión</p>
        
        <form className='login__inputSection' onSubmit={handleSubmit(validateUser)}>
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
          <button className='login__button'>Iniciar Sesión</button>
        </form>

      <div className='login__pHaveCount'>
        <p>No tienes una cuenta?</p>
        <NavLink to='/registro' className='login__Navlink'>Registrate aquí</NavLink>
      </div>
        
      </section>
    </>
    
  )
}

export default Login
import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/movieinfo-sinFondo.png'

const WelcomePage = () => {
    const navegate = useNavigate()
  
    const welcome = () => {
      navegate('/home')
    }
  
    return (
      <>
        <section className='loginDiv'>
            <img src={logo} alt="logo" className='login__logo'/>
            <p className='login__p'>Welcome to Movie Info</p>
            <button className='login__button' onClick={welcome}>Start!</button>
        </section>
      </>
      
    )
  }


export default WelcomePage
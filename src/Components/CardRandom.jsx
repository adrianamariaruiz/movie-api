import React from 'react'
import { useState } from 'react'
import Header from './Header'
import Modal from './Modal'

const CardRandom = ({random, idPetition}) => {

  return (
    <>
        
        <div className='home__titleCard'>
            <p>{random.Title}</p>
          </div>
          <div className='home__cardContent'>
            <div className='home__imageCard'>
              <img src={random.Poster} alt='poster image' />
            </div>
            <div className='home__infoCard'>
              <button onClick={()=>idPetition(random)} className='home__btnSeeMore'>See More</button>
            </div>
          </div>

    </>
  )
}

export default CardRandom
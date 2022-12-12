import React from 'react'

const Card = ({movie, idPetition}) => {
  return (
    <>
        <div className='home__titleCard'>
            <p>{movie.Title}</p>
        </div>
        <div className='home__cardContent'>
            <div className='home__imageCard'>
            <img src={movie.Poster} alt='poster image' />
            </div>
            <p>{movie.Type}</p>
            <div className='home__infoCard'>
            <button onClick={()=>idPetition(movie)} className='home__btnSeeMore'>See More</button>
            </div>
        </div>
    </>
  )
}

export default Card
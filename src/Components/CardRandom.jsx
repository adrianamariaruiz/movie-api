import React from 'react'

const CardRandom = ({random, petitionId}) => {

  return (
    <>
      <div className='home__titleCard'>
          <p className='random__title'>{random.Title}</p>
        </div>
        <div className='home__cardContent'>
          <div className='home__imageCard'>
            <img src={random.Poster} alt='poster image' />
            <p>{random.Type}</p>
          </div>
          <div className='home__infoCard'>
            <button onClick={()=>petitionId(random)} className='home__btnSeeMore'>See More</button>
          </div>
        </div>
    </>
  )
}

export default CardRandom
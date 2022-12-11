import React from 'react'

const RandomCard = () => {

const randomMovie = (min, max) => {
    return Math.floor(Math.random() * (max-min)+min)
}

const petitionRandom = async() => {
    const res = await axios(`https://www.omdbapi.com/?i=tt${randomMovie(1000000, 2000000)}&type=movie&apikey=ff18a1d&`)
        console.log(res.data)
        setRandom(res.data)
}

  return (
    <>
        <div className='home__Card'>
          <CardRandom 
          random={random}
          idPetition={idPetition}
          />
        </div>
        
        <Modal
          openModal={openModal}
          closeModal={closeModal}
        >
          <div className='home__Card home__Card--modal'>
            <div className='home__titleCard--modal'>
              <p>{dataResId.Title}</p>
            </div>
            <div className='home__infoCard--modal'>
              <p>{dataResId.Plot}</p>
              <p>{dataResId.Genre}</p>
              <p>Director: {dataResId.Director}</p>
              <p>{dataResId.Year}</p>
              <p>{dataResId.Language}</p>
              <p>Coutry: {dataResId.Country}</p>
              <p>{dataResId.Runtime}</p>
              <p>Actors: {dataResId.Actors}</p>
              <p>Writer: {dataResId.Writer}</p>
            </div>
          </div>
        </Modal>
    </>
  )
}

export default RandomCard
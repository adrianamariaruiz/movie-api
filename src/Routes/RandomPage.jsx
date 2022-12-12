import React, { useCallback } from 'react'
import { useState } from 'react'
import CardRandom from '../Components/CardRandom'
import Header from '../Components/Header'
import Modal from '../Components/Modal'
import { idPetition, petitionRandom } from '../helpers/axios'

const RandomPage = () => {

  // crear una lista de id y tomar uno de forma aleatoria
  // function getRandomInt(min, max) {
  // return Math.floor(Math.random() * (max-min)+min);
  // } cuando no se le pasa nada a random da un numero entre 0 y 1 (excluyendo el 1)

  // const idMax = 1265019 

  const [random, setRandom] = useState([])
  const [dataResId, setDataResId] = useState([])
  const [openModal, setOpenModal] = useState(false)

  const closeModal = () => {
    setOpenModal(false)
  }

  const randomMovie = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }
  console.log(randomMovie(1000000, 2000000))

  const randomPetition = useCallback(async () => {
    const res = await petitionRandom(randomMovie(1000000, 2000000));
    console.log(res.data)
    setRandom(res.data)
  }, [])

  const petitionId = useCallback(async () => {
    const res = await idPetition(random)
    console.log(res.data)
    if (res.data === undefined) {
      return []
    } else {
      setDataResId(res.data)
      setOpenModal(true)
    }
  }, [random])

  return (
    <>
      <section className='homeContainer'>
        <Header />

        <button onClick={randomPetition}>Random</button>

        <div className='home__Card'>
          <CardRandom
            random={random}
            petitionId={petitionId}
          />
        </div>

        <Modal
          openModal={openModal}
          closeModal={closeModal}
        >
          <div className='home__Card home__Card--modal'>
            <div className='home__titleCard--modal'>
              {/* <p>{dataResId.Title}</p> */}
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
      </section>
    </>
  )
}

export default RandomPage
import React, { useCallback } from 'react'
import { useState } from 'react'
import CardRandom from '../Components/CardRandom'
import Header from '../Components/Header'
import Modal from '../Components/Modal'
import { idPetition, petitionRandom } from '../helpers/axios'

const RandomPage = () => {

  const [random, setRandom] = useState([])
  const [dataResId, setDataResId] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [charging, setCharging] = useState(false)

  const closeModal = () => {
    setOpenModal(false)
  }

  const randomMovie = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const randomPetition = useCallback(async () => {
    const res = await petitionRandom(randomMovie(1000000, 2000000));
    console.log(res.data)
    console.log(res.data.Type)
    if(res.data.Type !== 'movie'){
      setCharging(true)
      console.log(charging)
      randomPetition()
    } else {
      setCharging(false)
      setRandom(res.data)
    }

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
        
        <div className='random__container--btn'>
          <button onClick={randomPetition} className='btn__random'>Random</button>
        </div>

        {
          charging === true &&
            <div className='charging'>
              <div className='loader'></div>
            </div>
        }

        <div className='home__cards--container'>

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
        </div>
      </section>
    </>
  )
}

export default RandomPage
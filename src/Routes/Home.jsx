import React, { useState } from 'react'
import { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

import Header from '../Components/Header'
import Modal from '../Components/Modal';
import Card from '../Components/Card';
import { petitionById, petitionMovie } from '../helpers/axios';

// <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
// <FontAwesomeIcon icon="fa-solid fa-right-long" />
// <FontAwesomeIcon icon="fa-solid fa-left-long" />

const Home = () => {

  const [dataRes, setDataRes] = useState([])
  const [dataResId, setDataResId] = useState([])
  const [counterPage, setCounterPage ] = useState(1)
  const [title, setTitle] = useState('')
  const [openModal, setOpenModal] = useState(false)

  const closeModal = () => {
      setOpenModal(false)
  }

  // console.log(dataRes[0].imdbID)
  // https://www.omdbapi.com/?t=game+of+thrones&apikey=ff18a1d
  // imdbID: "tt0372784" del el zorro
  // const res = await axios(`https://www.omdbapi.com/?i=${prueba}&apikey=ff18a1d`)
  // const res = await axios(`https://www.omdbapi.com/?s=${title}&apikey=ff18a1d&page=${page}`)

  // peticion axios para obtener la data
  const petition = useCallback(async(page) => {
    const res = await petitionMovie(title, page)
    console.log(res.data.Search)
    if(res.data.Search === undefined){
      return []
    }else{
      setDataRes(res.data.Search)
    }
  }, [title])

  const idPetition = useCallback(async(props)=>{
    // console.log(props)
    const res = await petitionById(props)
    console.log(res.data)
    if(res.data === undefined){
      return []
    }else{
      setDataResId(res.data)
      setOpenModal(true)
    }
  }, [])

  const nextPage = () => {
    setCounterPage(counterPage + 1)
    petition(counterPage + 1)
  }

  const previousPage = () => {
    setCounterPage(counterPage - 1)
    petition(counterPage - 1)
  }

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  return (
    <>
      <section className='homeContainer'>

        <Header/>
        <h2>Search by title</h2>
        {/* botones next previous input busqueda */}
        <div className='home__divBtnInput'>
          <button onClick={previousPage} className='home__btnPrevious'><FontAwesomeIcon icon={faLeftLong}/></button>
          
          <div className='home__divInput'>
            <input
              type='text'
              placeholder='Title'
              value={title}
              onChange={handleChange}
            ></input>
            <button onClick={()=>petition(counterPage)} className='home__btnSearch'><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
          </div>
            
          <button onClick={nextPage} className='home__btnNext'><FontAwesomeIcon icon={faRightLong}/></button>
        </div>

        {/* tarjeta con poster */}
        {
          dataRes.map((movie, index) => {
            return (
              <div key={index} className='home__Card'>
                <Card
                  movie={movie}
                  idPetition={idPetition}
                />
              </div>
            )
          })
        }

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

      </section>
    </>
    
  )
}

export default Home
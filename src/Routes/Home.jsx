import axios from 'axios'
import React, { useState } from 'react'
import Header from '../Components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Components/Modal';
import { useCallback } from 'react';

// <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
// <FontAwesomeIcon icon="fa-solid fa-right-long" />
// <FontAwesomeIcon icon="fa-solid fa-left-long" />

const Home = () => {

  const [dataRes, setDataRes] = useState([])
  const [dataResId, setDataResId] = useState([])
  const [counterPage, setCounterPage ] = useState(1)
  const [title, setTitle] = useState('')

  const [openModal, setOpenModal] = useState(false)

    // ponerlo en el boton de ver mas para que se abra el modal
    // const handleEdit = () => {
    //     setOpenModal(true)
    // }

    const closeModal = () => {
        setOpenModal(false)
    }

  // console.log(dataRes[0].imdbID)
  // https://www.omdbapi.com/?t=game+of+thrones&apikey=ff18a1d
  
  // const urlRequest = `${baseURL}?apikey=${apiKey}&s=${title}&type=movie&y=${new Date().getFullYear()}&page=${page}`
  // imdbID: "tt0372784" del el zorro

  // peticion axios para obtener la data
  const petition = useCallback(async(page) => {
    // const res = await axios(`https://www.omdbapi.com/?i=${prueba}&apikey=ff18a1d`)
    const res = await axios(`https://www.omdbapi.com/?s=${title}&apikey=ff18a1d&page=${page}`)
    console.log(res.data.Search)
    if(res.data.Search === undefined){
      return []
    }else{
      setDataRes(res.data.Search)
    }
  }, [title])

  const idPetition = useCallback(async(props)=>{
    // console.log(props)
    const res = await axios(`https://www.omdbapi.com/?apikey=ff18a1d&i=${props.imdbID}`)
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
    // console.log(e.target.value)
  }

  return (
    <>
      <section className='homeContainer'>
        <Header/>

        <div className='home__btnNext'>
          <button onClick={previousPage}><FontAwesomeIcon icon={faLeftLong}/></button>
          
            <input
              type='text'
              placeholder='Title'
              value={title}
              onChange={handleChange}
            ></input>
            <button onClick={()=>petition(counterPage)}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
         
          <button onClick={nextPage}><FontAwesomeIcon icon={faRightLong}/></button>
        </div>

        <Modal
          openModal={openModal}
          closeModal={closeModal}
        >
          <div key={dataResId.imdbID} className='home__Card'>
            <div className='home__titleCard'>
              <p>{dataResId.Title}</p>
            </div>
            <div className='home__cardContent'>
              <div className='home__infoCard'>
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
          </div>
        </Modal>

        

        {
          dataRes.map((movie, index) => {
            return (
              <div key={index} className='home__Card'>
                <div className='home__titleCard'>
                  <p>{movie.Title}</p>
                </div>
                <div className='home__cardContent'>
                  <div className='home__imageCard'>
                    <img src={movie.Poster} alt='poster image' />
                  </div>
                  <div className='home__infoCard'>
                    <button onClick={()=>idPetition(movie)} className='home__btnSeeMore'>See More</button>
                  </div>
                </div>
              </div>
            )
          })
        }

      </section>
    </>
    
  )
}

export default Home
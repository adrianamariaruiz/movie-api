import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Header from '../Components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

// <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
// <FontAwesomeIcon icon="fa-solid fa-right-long" />
// <FontAwesomeIcon icon="fa-solid fa-left-long" />

const Home = () => {

  const [dataRes, setDataRes] = useState([])
  const [dataResId, setDataResId] = useState([])
  const [counterPage, setCounterPage ] = useState(1)
  const [title, setTitle] = useState('')


  const idMovie = dataRes.map((movie)=>{
    return movie.imdbID
  })

  // console.log(idMovie)
  // console.log(dataRes[0].imdbID)

  // const id = dataRes.title
  const id = 'tt3896198'
  // const titulo = 'game'
  // const type = 'type'
  // const page = '1'
  // https://www.omdbapi.com/?t=game+of+thrones&apikey=ff18a1d
  
  // const urlRequest = `${baseURL}?apikey=${apiKey}&s=${title}&type=movie&y=${new Date().getFullYear()}&page=${page}`
  // imdbID: "tt0372784" del el zorro

  // peticion axios para obtener la data
  const petition = async() => {
    // const res = await axios(`https://www.omdbapi.com/?i=${prueba}&apikey=ff18a1d`)
    const res = await axios(`https://www.omdbapi.com/?s=${title}&apikey=ff18a1d&page=${counterPage}`)
    console.log(res.data.Search)
    if(res.data.Search === undefined){
      return []
    }else{
      setDataRes(res.data.Search)
    }
  }

  const idPetition = async()=>{
    // const urlRequest = `${baseURL}?apikey=${apiKey}&i=${id}`
    const res = await axios(`https://www.omdbapi.com/?apikey=ff18a1d&i=${id}`)
    console.log(res.data)
    setDataResId(res.data)
  }

  useEffect(()=>{
   
      petition()
      idPetition()
 
  }, [title, counterPage])

  const nextPage = () => {
    setCounterPage(counterPage + 1)
    console.log(counterPage)
  }

  const previousPage = () => {
    setCounterPage(counterPage - 1)
    console.log(counterPage)
  }

  const handleChange = (e) => {
    setTitle(e.target.value)
    console.log(e.target.value)
  }

  return (
    <>
      <section className='homeContainer'>
        <Header/>

        <div className='home__btnNext'>
          <button onClick={previousPage}><FontAwesomeIcon icon={faLeftLong}/></button>
          
          
            <input
              type='text'
              placeholder='Titulo'
              value={title}
              onChange={handleChange}
            ></input>
            <button><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
         

          <button onClick={nextPage}><FontAwesomeIcon icon={faRightLong}/></button>
        </div>

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
                    <button className='home__btnSeeMore'>Ver mas</button>
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
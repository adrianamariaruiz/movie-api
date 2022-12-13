import { faLeftLong, faMagnifyingGlass, faRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useCallback, useState } from 'react'
import Card from '../Components/Card'
import Header from '../Components/Header'
import Modal from '../Components/Modal'
import { petitionById, petitionOnlyMovies } from '../helpers/axios'

const Movies = () => {

    const [page, setPage] = useState(1)
    const [dataMovies, setDataMovies] = useState([])
    const [dataResId, setDataResId] = useState([])
    const [title, setTitle] = useState('')
    const [openModal, setOpenModal] = useState(false)

    const closeModal = () => {
        setOpenModal(false)
    }

    const moviesArray = useCallback(async (page) => {
        const res = await petitionOnlyMovies(title, page)
        setDataMovies(res.data.Search)
        console.log(res.data.Search)
    }, [title, page])

    const idPetition = useCallback(async (props) => {
        // console.log(props)
        const res = await petitionById(props)
        console.log(res.data)
        if (res.data === undefined) {
            return []
        } else {
            setDataResId(res.data)
            setOpenModal(true)
        }
    }, [])

    const nextPage = () => {
        setPage(page + 1)
        moviesArray(page + 1)
    }

    const previousPage = () => {
        setPage(page - 1)
        moviesArray(page - 1)
    }

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    return (
        <>
            <section className='homeContainer'>
                <Header />
                <h2>Search by movie title</h2>
                <div className='home__divBtnInput'>
                    <button onClick={previousPage} className='home__btnPrevious'><FontAwesomeIcon icon={faLeftLong} /></button>

                    <div className='home__divInput'>
                        <input
                            type='text'
                            placeholder='Title'
                            value={title}
                            onChange={handleChange}
                        ></input>
                        <button onClick={() => moviesArray(page)} className='home__btnSearch'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    </div>

                    <button onClick={nextPage} className='home__btnNext'><FontAwesomeIcon icon={faRightLong} /></button>
                </div>

                {
                    dataMovies.map((movie, index) => {
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

export default Movies


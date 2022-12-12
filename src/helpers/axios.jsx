import axios from "axios"

export const petitionMovie = async (title, page) => {
    const res = await axios(`https://www.omdbapi.com/?s=${title}&apikey=ff18a1d&page=${page}`)
    // console.log(res.data.Search)
    return res
}

export const petitionById = async (movie) => {
    const res = await axios(`https://www.omdbapi.com/?apikey=ff18a1d&i=${movie.imdbID}`)
    // console.log(res.data)
    return res
}

export const petitionRandom = async (idArg) => {
    const res = await axios(`https://www.omdbapi.com/?i=tt${idArg}&apikey=ff18a1d&`)
    // console.log(res.data)
    return res
}

export const idPetition = async (props) => {
    const res = await axios(`https://www.omdbapi.com/?apikey=ff18a1d&i=${props.imdbID}`)
    // console.log(res.data)
    return res
}

export const petitionOnlyMovies = async (title, page) => {
    const res = await axios(`https://www.omdbapi.com/?s=${title}&type=movie&apikey=ff18a1d&page=${page}`)
    // console.log(res.data)
    return res
}
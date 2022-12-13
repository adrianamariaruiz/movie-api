import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Routes/Login"
import Register from "./Routes/Register"
import Home from "./Routes/Home"
import RandomPage from "./Routes/RandomPage"
import Movies from "./Routes/Movies"

import './styles/Login.css'
import './styles/Header.css'
import './styles/Home.css'
import './styles/Modal.css'
import './styles/Menu.css'
import './styles/Random.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/registro" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/random" element={<RandomPage/>}/>
        <Route path="/movies" element={<Movies/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

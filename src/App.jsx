import Login from "./Routes/Login"
import Register from "./Routes/Register"
import Header from "./Components/Header"
import Home from "./Routes/Home"

import './styles/Login.css'
import './styles/Header.css'
import './styles/Home.css'
import './styles/Modal.css'
import './styles/Menu.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import CardRandom from "./Components/CardRandom"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/registro" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/random" element={<CardRandom/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App

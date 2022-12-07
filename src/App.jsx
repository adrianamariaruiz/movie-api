import Login from "./Routes/Login"
import Register from "./Routes/Register"
import Header from "./Components/Header"
import Home from "./Routes/Home"

import './styles/Login.css'
import './styles/Header.css'
import './styles/Home.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/registro" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App

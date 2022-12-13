import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Routes/Login"
import Register from "./Routes/Register"
import WelcomePage from "./Routes/WelcomePage"
import Home from "./Routes/Home"
import RandomPage from "./Routes/RandomPage"
import Movies from "./Routes/Movies"
import Series from "./Routes/Series"

import './styles/Login.css'
import './styles/Header.css'
import './styles/Home.css'
import './styles/Modal.css'
import './styles/Menu.css'
import './styles/Random.css'
import './styles/Spinner.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Login />} />
        <Route path="/registro" element={<Register/>}/> */}
        
        <Route path="/" element={<WelcomePage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/random" element={<RandomPage/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/series" element={<Series/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

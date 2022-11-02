import './App.css'

import { BrowserRouter,Routes, Route } from 'react-router-dom'
import context from './context/context.js'
import { useState, useEffect } from 'react'

import Home from './views/Home.jsx'
import Pokemones from './views/Pokemones.jsx'
import Pokemon from './views/Pokemon.jsx'
import Navbar from './components/Navbar'

function App() {
  const [data, setData] = useState([])
  const globalState = { data }

  useEffect(()=> {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((res)=> res.json())
      .then ((json)=> setData(json.results))
      .catch((e)=> console.log(e))
  }, [])

  return (
    <div className="App">
      <context.Provider value={globalState}>
        <BrowserRouter>
        <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home /> }></Route>
            <Route path='/pokemones' element={<Pokemones /> }></Route>
            <Route path='/pokemones/:name' element={<Pokemon /> }></Route>
          </Routes>   
        </BrowserRouter>
      </context.Provider>       
    </div>
  )
}
export default App

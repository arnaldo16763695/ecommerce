import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Home/>
    </>
  )
}

export default App

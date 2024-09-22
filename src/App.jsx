import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import Home from './pages/Home'
import Features from './components/Features'
import Register from './pages/Register'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Features/>
      <Register/>
     

      
    </div>
  )
}

export default App
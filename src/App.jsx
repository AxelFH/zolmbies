import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Hero from './pages/Hero'
import Navbar from './pages/Navbar'
import ProductInfo from './pages/ProductInfo'
import Overview from './pages/Overview'
import Features from './pages/ProductFeatures'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import About from './pages/About'



function App() {
  return (
    <>
      
      <Navbar></Navbar>
      <Hero></Hero>
    </>
  )
}

export default App

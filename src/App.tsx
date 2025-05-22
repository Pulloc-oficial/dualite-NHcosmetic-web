import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar'
import Hero from './pages/home/sections/Hero';
import Footer from './components/footer/Footer';
import FloatingSocialFlags from './pages/home/sections/FloatingSocialFlags';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar/>
      <FloatingSocialFlags/>
      <Hero/>
      <Footer/>
    </Router>
  )
}

export default App

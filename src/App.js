import React from 'react'
import './styles/App.scss'
import Home from './components/Home';
import Brands from './components/Brands';
import Specialitties from './components/Specialitties'
import AboutUs from './components/AboutUs';
import SpecialDishes from './components/SpecialDishes';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className='App'>
    <Home />
    <Brands />
    <Specialitties />
    <AboutUs />
    <SpecialDishes />
    <Footer />
    </div>
  
  )
}

export default App


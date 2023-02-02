import React from 'react'
import Announce from '../Announce'
import Categories from '../Categories'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Newslatter from '../Newslatter'
import Products from '../Products'
import Slider from '../Slider'
import Cart from './Cart'
import Login from './Login'


const Home = () => {
  return (
    <div> 
    <Announce/>
    <Navbar/>
    <Slider/>
    <Categories/>
    <Products />
    <Newslatter/>
    <Footer/>
   
    </div>
  )
}

export default Home
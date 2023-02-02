import React from 'react'
import Announce from '../Announce'
import Navbar from '../Navbar'
import Products from '../Products'
import Footer from '../Footer'
import Newslatter from '../Newslatter'

const Ctegorypage = () => {
  return (
    <div>
         <Announce/>
         <Navbar/>
         <div className="flex flex-col p-5">
            <h1 className="text-[30px]">Men's Cloth</h1>
            <div className="flex items-center justify-between mt-3">
                <div className="flex">
                    <p>Fliter by</p>
                    <select className="ml-3 border-2 border-silver">
                        <option Selected disabled>Size</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                    <select className="ml-3 border-2 border-silver">
                        <option Selected disabled>Color</option>
                        <option>green</option>
                        <option>pink</option>
                        <option>red</option>
                        <option>blue</option>
                    </select>
                </div>
                <div className="flex">
                  <p>Sort by</p>
                  <select className='ml-3 border-2 border-silver'>
                    <option>Newset (first)</option>
                    <option>Newset (first)</option>
                    <option>Price (Asc)</option>
                    <option>Price (Desc)</option>
                  </select>
                </div>
            </div>
         </div>
         <Products />
         <Newslatter/>
    <Footer/>

    </div>
  )
}

export default Ctegorypage
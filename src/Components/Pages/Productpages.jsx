import React from 'react'
import Announce from '../Announce'
import Counter from '../Counter'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Newslatter from '../Newslatter'

const Productpages = () => {
  return (
    <div>
        <Announce/>
        <Navbar/>
        <div className='flex justify-center'>
            <div className='flex flex-1 items-center justify-center'>
                <img src='https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-PISTACHIO-2_360x.jpg?v=1642545216' alt='product_images' className='rounded-lg shadow-lg hover:scale-[1.1] w-[80%] h-[80%]'/>
            </div>
            <div className="flex-[1.3] flex items-start justify-items-start flex-col mt-10 ">
             <h1 className='title text-[40px]'> Capuche 100% couton</h1>
             <p className='pr-[4rem] text-justify mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius animi odio aperiam fugit necessitatibus, quos debitis quo sint dignissimos deleniti praesentium recusandae quas exercitationem commodi ab consectetur. Rerum, minima deleniti.</p>
             <p className='mt-7 text-3xl'>Price: <b>€70</b></p>
             <div className='flex text-2xl mt-7'>
                colors
                <div className='bg-red-600 p-[10px] border-2 ml-5  w-[2rem] h-[2rem] rounded-full cursor-pointer hover:scale-[1.1]'></div>
                <div className='bg-green-600  p-[10px] border-2 ml-5  w-[2rem] h-[2rem] rounded-full cursor-pointer hover:scale-[1.1]'></div>
                <div className='bg-pink-600 p-[10px] border-2 ml-5 w-[2rem] h-[2rem] rounded-full cursor-pointer hover:scale-[1.1]'></div>
             </div>
             <div className='mt-7 text-2xl'>
                Size
                <select className='ml-5 border-2'>
                    <option selected disabled>Select</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
               </div>
               <div className='mt-10'>
                <Counter/>
               </div>
               <button className='btn mt-5'> Add to cart</button>
            </div>
              
        </div>
        <Newslatter/>
        <Footer/>
    </div>
  )
}

export default Productpages
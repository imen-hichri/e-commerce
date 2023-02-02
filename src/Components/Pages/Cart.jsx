import React from 'react'
import Announce from '../Announce'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Newslatter from '../Newslatter'
import Counter from '../Counter'


const Cart = () => {
  return (
    <div>
        <Announce/>
        <Navbar/>
         <div className='p-6'>
            <div className="flex justify-center text-5xl">
                Cart
            </div>
            <div className='flex items-center justify-between mt-4'>
                <button className='btn bg-white text-[#E56399] border-2 '>Continue shopping</button>
                <div className='flex underline text-lg hover:cursor-pointer'>
                    <p>
                        Items in your cart : 3</p>
                        <p className='ml-5'>Whitelist : 0</p>
                </div>
                <button className='btn'>Checkout</button>
            </div>
            <div className='flex mt-7'>
                <div className='flex flex-col flex-1'>
                   {/* List of products*/}
            <div className='flex w-[100%] h-auto items-center'>
                   <div className='product flex self-start pl-7'>
                    <img 
                    className=' cursor-pointer w-[7.2rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300'
                     src='https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824' alt='product_img'/>
                    <div className='description flex flex-col ml-5 h-auto justify-between '>
                        <p>
                            <b className='mr-2'>
                                ID: 
                            </b>1234
                        </p>
                        <p>
                            <b className='mr-2'>
                                Product: 
                            </b>Dazzin
                        </p>
                        <p className='flex items-center justify-start'>
                            <b className='mr-2'>
                                Color:
                            </b><div className='rounded-full border-2 p-[10px] cursor-pointer ml-1 w-[20px] h-[20px]'>

                            </div>
                        </p>
                        <p>
                            <b className='mr-2'>
                                Size: 
                            </b>1234
                        </p>
                    </div>
                   </div>
                   <div className='  flex flex-col justify-center items-center flex-auto'>
                    <Counter/>
                    <p className='flex items-center justify-center text-4xl mt-3'><b>€70</b></p>
                   
                   </div>
                   </div>
                   <hr className='mt-7 mb-7'/>
                   <div className='flex w-[100%] h-auto items-center '>
                   <div className='product flex self-start pl-7'>
                    <img 
                    className=' cursor-pointer w-[7.2rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300'
                     src='https://cdn.shopify.com/s/files/1/0240/7285/products/KushJonesLST-ShirtinBlack09_360x.jpg?v=1642719733' alt='product_img'/>
                    <div className='description flex flex-col ml-5 h-auto justify-between '>
                        <p>
                            <b className='mr-2'>
                                ID: 
                            </b>1234
                        </p>
                        <p>
                            <b className='mr-2'>
                                Product: 
                            </b>Dazzin
                        </p>
                        <p className='flex items-center justify-start'>
                            <b className='mr-2'>
                                Color:
                            </b><div className='rounded-full border-2 p-[10px] cursor-pointer bg-sky-500 ml-1 w-[20px] h-[20px]'>

                            </div>
                        </p>
                        <p>
                            <b className='mr-2'>
                                Size: 
                            </b>1234
                        </p>
                    </div>
                   </div>
                   <div className='  flex flex-col justify-center items-center flex-auto'>
                    <Counter/>
                    <p className='flex items-center justify-center text-4xl mt-3'><b>€70</b></p>
                   
                   </div>
                   </div>
                   <hr className='mt-7 mb-7'/>
                </div>
                <div className=' h-[61vh] p-5 flex flex-col items-center flex-[0.4] w-auto border-2 rounded-md shadow-lg border-[#ffa3af]'>
                  <h1 className='text-[2rem]'> Summary</h1> 
                  <div className='flex justify-between mt-3 w-[100%]'>
                    <p>Subtotal</p>
                    <p>€140</p>
                  </div>

                  <div className='flex justify-between mt-3 w-[100%]'>
                    <p>Shipping</p>
                    <p>€140</p>
                  </div>

                  <div className='flex justify-between mt-3 w-[100%]'>
                    <p>  Shipping discount</p>
                    <p>-€140</p>
                  </div>

                  <div className='flex justify-between mt-3 w-[100%] text-3xl font-bold'>
                    <p>total</p>
                    <p>€140</p>
                  </div>
                </div>
            </div>
         </div>



        <Newslatter/>
        <Footer/>
    </div>
  )
}

export default Cart
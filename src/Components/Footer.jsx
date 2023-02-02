import { EmailOutlined, Facebook, GitHub, Instagram, LinkedIn, LocalPhoneOutlined, LocationOnOutlined, Pinterest } from '@mui/icons-material'
import React from 'react'

const Footer = () => {
  const Stylesociale = 'm-3 rounded-full cursor-pointer p-2 text-white '
  return (
    <div className=" flex items-center justify-around p-2">
        <div className=" flex-1 flex flex-col flex-wrap p-2">
          <h1 className="text-[25px]">imen hichri</h1>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorem esse nesciunt.</p>
         
            <div className="flex items-center justify-center mt-3 self-start">
            <div className={Stylesociale +'bg-blue-700'}>
                <Facebook/>
            </div>
            <div className={Stylesociale +'bg-orange-500'}>
                <Instagram/>
            </div>
            <div  className={Stylesociale +'bg-sky-700'}>
                <LinkedIn/>
            </div>
            <div  className={Stylesociale +'bg-blue-400'}>
                <Pinterest/>
            </div>
            <div  className={Stylesociale +'bg-gray-900'}>
                <GitHub/>
            </div>
          </div>
          </div>
            
    

           <div className="flex flex-1 flex-col p-2">
           <div className="flex m-3">
            <LocationOnOutlined/>
            <p className="pl-3">Ben arouss</p>
           </div>

           <div className="flex m-3">
            <LocalPhoneOutlined/>
            <p className="pl-3">+21600000000</p>
           </div>

           <div className="flex m-3">
            <EmailOutlined/>
            <p className="pl-3">imenhichri95@gmail.com</p>
           </div>
           </div>
    </div>
  
  )
}

export default Footer
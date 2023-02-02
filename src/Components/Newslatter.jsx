import { Send } from '@mui/icons-material'
import React from 'react'

const Newslatter = () => {
  return (
    <div className="flex justify-center items-center h-[350px] w-[100%] flex-col bg-[#E56399]">
        <h1 className="font-bold text-[50px]">Newslatter</h1>
        <h2 className="text-[20px] mt-2">Always in touch with us for your favourite products</h2>
        <div className="flex mt-[3rem] items-center justify-between min-h-[2rem] min-w-[30rem] bg-white border-[#cccccc] rounded-[5px] overflow-hidden">
            <input type='email' placeholder ='Email' className=" border-none pl-[20px] flex-[7] outline-none"/>
            <button className="bg-[#F9C6DD] flex-1 h-[100%]"> 
              <Send className="text-white"/>
             </button>
        </div>
    </div>
  )
}

export default Newslatter
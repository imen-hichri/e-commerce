import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React from 'react'
import { Sliderapp } from '../applidore/Sliderapp'
import { useState } from 'react'
import './Slider.css'


function Slider() {
  const [Slides] = useState(Sliderapp)
  const nextSlide = () => {
    if (activeSlide === Slides.length - 1)
    {
      setactiveSlide(0)
    }
    else 
    {
      setactiveSlide(activeSlide + 1 )
    }
  }
  const prvSlide = () => {
    if (activeSlide === 0 )
    {
      setactiveSlide(Slides.length - 1)
    }
    else 
    {
      setactiveSlide(activeSlide - 1)
    }
  }
  const [activeSlide, setactiveSlide] = useState(0);
    const Arrowstyle = "rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer"
  return (
    <div className="parentDiv h-[540px] bg-white flex items-center justify-between">
        <div className={Arrowstyle}>
        <ArrowLeftOutlined style={{fontSize : '50px'}} onClick = {prvSlide}/>
        </div>
           {
            Slides.map((slide, index) => {
              if (index === activeSlide){
                return (
                  <div className={'wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#f9dbd0] border-10px overflow-hidden relative' + slide.background} key={index}>
              <div className=" slide flex items-center justify-center h-[100%]">
                <div className="forImage flex flex-1 justify-center items-center h-[100%]">
                 <img className="h-[100%] object-cover" 
                    src = {slide.src}
                    alt='slide_images'
                 />
                </div>
                <div className="des flex flex-col flex-1 place-items-start justify-center ml-11">
                  <h2 className="text-[55px]">{slide.content.h2}</h2>
                  <p className="text-[30px]">{slide.content.p}</p>
                  <button className="btn">Shop Now</button>
                </div>
              </div>
            </div>
                );
              }
            })}


            <div className={Arrowstyle}>
                <ArrowRightOutlined style={{fontSize : '50px'}} onClick = {nextSlide}/>
            </div>


    
    </div>
  )
}

export default Slider
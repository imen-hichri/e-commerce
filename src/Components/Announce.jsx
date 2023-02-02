import { Close } from '@mui/icons-material'
import {React, useState} from 'react'


const Announce = () => {
  
const[announceStyle, setAnnounceStyle]  = useState("bg-[#F9C6DD] text-white flex items-center justify-center")
const handleClose = () => {
  setAnnounceStyle(announceStyle + " hidden ")
}
  return (
    <div className= {announceStyle}>
      <h2>Promo de printemps moins de 50% </h2>
     <Close className="cursor-pointer" onClick= {handleClose}/>
    </div>
  )
}

export default Announce
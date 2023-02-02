import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import {React, useState} from 'react'

function Product ({item}) {
  const [hoverEffects, sethoverEffects] = useState(' opacity-0');
  const handleHoverEnter = () => {
    sethoverEffects('opacity-1 bg-[rgba(0,0,0,0.2)]')
  }

  const handleHoverExit = () => {
    sethoverEffects(' opacity-0')
  }

  return (
    <div className="flex flex-1 items-center justify-center min-w-[250px] min-h-[350px] overflow-hidden rounded-md shadow-lg m-3 relative" onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverExit}>
      <img src={item.src} alt='product_image' />
      <div className={'flex items-center justify-center w-[100%] h-[100%] absolute  ease-in duration-100' + hoverEffects}>
      <div className="h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-2  hover:bg-[#f283b6] hover:text-white hover:scale[1.1] ease-in duration-100 cursor-pointer">
       <ShoppingCartOutlined />
      </div>
      <div className="h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-2   hover:bg-[#f283b6] hover:text-white hover:scale[1.1] ease-in duration-100 cursor-pointer">
        <FavoriteBorderOutlined/>
      </div>
      <div className="h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-2   hover:bg-[#f283b6] hover:text-white hover:scale[1.1] ease-in duration-100 cursor-pointer">
        <SearchOutlined/>
      </div>
    </div>
    </div>
  )
}

export default Product
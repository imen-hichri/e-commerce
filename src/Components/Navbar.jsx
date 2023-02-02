import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react';
import Register from './Pages/Register';
import { Link } from "react-router-dom";


function Navbar  () {
  const Style = "text-[14px] cursor-pointer ml-[25px] mobile:ml-[15px]"
  return (
    <div className="navbar h-[60px] shadow-md relative z-10">
      <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center mobile:pl-0 mobile:pr-0">
       <div className="letf flex flex-1 items-center">
        <div className="language cursor-pointer text-[16px] mobile:hidden">  En </div>
        <div className="searchInput flex border-[2px] border-solid border-lighgrey rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#F9C6DD] transition-all">
          <input className="input outline-none mobile:w-[50px]" type="text"/>
          <Search className='' style={{fontsize: "16px"}}/>

        </div>
       </div>
       <div className="center flex-1 text-center">
        <div className="logo font-bold text-lg mobile:text-sm"> Shopping </div>
       </div>
     
       <div className="right flex flex-1 items-center justify-end mobile:flex-[2] mobile:justify-center">
        <div className={Style}> Register
         
          </div>
        <div className={Style}>Sign in</div>
        <div className={Style}>
        <Badge badgeContent={2} color="primary">
          <ShoppingCartOutlined/>

        </Badge>
        </div>
     
       </div>
     
      </div>
    </div>
  )
}

export default Navbar;
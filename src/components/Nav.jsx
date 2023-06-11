import React from 'react'
import logo from "../Assets/OIP.jpeg"
import { FaSearch, FaHome } from "react-icons/fa"
const Nav = () => {
  return (
    <div className="flex content-center container  justify-between  gap-3 p-3 ">
    <div className="flex gap-3 items-center">
    <img className="w-10" src={logo} alt="" />
     <div className="flex bg-slate-100  shadow-sm p-1 px-2 rounded content-center items-center">
     <FaSearch /><input className=" placeholder:italic placeholder:text-slate-400 block bg-slate-100 w-60  py-2 pl-4 pr-3  focus:outline-none  sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
     </div>
    </div>
    <div className="flex justify-between gap-5">
      <div className="flex column">
        <FaHome className="text-3xl" />
      </div>
    </div>


   
      



      </div>
  )
}

export default Nav
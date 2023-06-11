import React from 'react'
import logo from "../Assets/OIP.jpeg"
import {  useNavigate } from 'react-router-dom'
import { FaSearch, FaHome, } from "react-icons/fa"
import {  BsPeopleFill, BsBriefcaseFill } from "react-icons/bs"
import Signup from './Signup'
const Nav = () => {
  const navigate = useNavigate()
const   Signu = ()=>{
      navigate("/signup")
  }
  const login = ()=>{
    navigate("/login")
  }
  return (
    <div className="flex content-center container  justify-between  gap-3 p-3 ">
    <div className="flex gap-3 items-center">
    <img className="w-10" src={logo} alt="" />
     <div className="flex bg-slate-100  shadow-sm p-2 px-2 rounded content-center items-center">
     <FaSearch /><input className=" placeholder:italic placeholder:text-slate-400 block bg-slate-100 w-60   pl-4 pr-3  focus:outline-none  sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
     </div>
    </div>
   <div className='flex gap-2'>
   <button onClick={login} className=' hover:bg-slate-100 p-2 px-3 rounded'>
        Log in
    </button>
    <button onClick={Signu} className="border-2 p-2 rounded-lg border-blue-700">Create account</button>
   </div>


   
      



      </div>
  )
}

export default Nav
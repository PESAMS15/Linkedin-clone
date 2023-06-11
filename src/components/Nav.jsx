import React from 'react'
import { useState } from 'react'
import logo from "../Assets/OIP.jpeg"
import {  useNavigate } from 'react-router-dom'
import { FaSearch, FaHome, FaBell, FaRegBell } from "react-icons/fa"
import {  BsPeopleFill, BsBriefcaseFill } from "react-icons/bs"
import {  CgProfile } from "react-icons/cg"
import Signup from './Signup'
import Modal from './Modal'
import Example from './Modal'
const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    // alert("close")
    setIsModalOpen(false);
  };
  const navigate = useNavigate()
const   Signu = ()=>{
      navigate("/signup")
  }
  const login = ()=>{
    navigate("/login")
  }
  let ref = localStorage.getItem("user")
  let coref = JSON.parse(ref)
  console.log(coref)
  return (
    <div className="flex content-center container-md  justify-between  gap-3 p-3 ">
    <div className="flex gap-3 items-center">
    <img className="w-10" src={logo} alt="" />
     <div className=" bg-slate-100 hidden  shadow-sm p-2 px-2 rounded content-center items-center md:flex">
     <FaSearch /><input className=" placeholder:italic placeholder:text-slate-400 block bg-slate-100 w-60   pl-4 pr-3  focus:outline-none  sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
     </div>
    </div>
   <div className='flex items-center gap-2'>
   <button onClick={login} className={coref? "d-none" : "hover:bg-slate-100 p-2 px-3 rounded"}>
        Log in
    </button>
    <button onClick={Signu} className={coref? "d-none": "border-2 p-2 rounded-lg border-blue-700"}>Create account</button>
    <button onClick={openModal} className={coref? "border-2 p-2 rounded-lg border-blue-700 text-blue-800":  "d-none"}> Create Post</button>



    <div className='text-2xl cursor-pointer mx-1'><FaRegBell /></div>
    <div className='text-2xl cursor-pointer mx-1'><CgProfile /></div>

   </div>
   <Example opened={isModalOpen} closed={closeModal} />

   
      



      </div>
  )
}

export default Nav
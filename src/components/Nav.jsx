import React from 'react'
import { useState } from 'react'
import logo from "../Assets/OIP.jpeg"
import {  useNavigate } from 'react-router-dom'
import { FaSearch, FaHome, FaBell, FaRegBell } from "react-icons/fa"
import {  BsPeopleFill, BsBriefcaseFill } from "react-icons/bs"
import {  CgProfile } from "react-icons/cg"
import Signup from './Signup'
import Modal from './Modal'
import axios from 'axios'
import Example from './Modal'
const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ImageSrc, setImageSrc] = useState("")

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
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  let ref = localStorage.getItem("user")
  let coref = JSON.parse(ref)
  console.log(coref)
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImageSrc(reader.result);
      console.log(ImageSrc)
  //
    };
   
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const postPr = ()=>{
      // alert("clicked")
      axios.patch(`http://localhost:5690/signUp/${coref.id}`, { profilePic: "ok" })
      .then((response) => {
        alert('Profile picture updated successfully:', response.data);
      })
      .catch((error) => {
        alert('Error updating profile picture:', error);
      });
  }
  return (
    <div className="shadow-sm">
        <div className="flex  content-center container-md  justify-between  gap-3 p-3 ">
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
    <div className="relative">
      <button
        className=" text-gray-800 font-semibold p-2  rounded-md inline-flex items-center"
        onClick={toggleDropdown}
      >
    <div className='w-8 cursor-pointer mx-1'><img src={coref.profilePic} alt="" /></div>
      
        {/* <svg
          className={`ml-2 h-5 w-5 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M6 8a1 1 0 011.7-.7l3 3a1 1 0 01-1.4 1.4L7 9.42V15a1 1 0 11-2 0V9.41L3.7 10.7a1 1 0 11-1.4-1.4l3-3z"
            clipRule="evenodd"
          />
        </svg> */}
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-40 p-1  right-0  bg-white rounded-md shadow-lg">
           <label className='hover:bg-slate-200 p-2 w-full cursor-pointer' htmlFor="prof">Add profile pic</label>
           <input type="file" name="" id="prof" className='hidden' onChange={handleImageUpload} />
          <img src={ImageSrc? ImageSrc : ""} alt="" />
          < button className={ImageSrc? "p-2 bg-black my-2 text-white rounded-lg mx-auto block" : "hidden"} onClick={postPr} >Add profile pic</button>
        </div>
      )}
    </div>

   </div>
   <Example opened={isModalOpen} closed={closeModal} />

   
      



      </div>
    </div>
  )
}

export default Nav
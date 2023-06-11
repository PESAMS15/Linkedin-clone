import React from 'react'
import logo from "../Assets/OIP.jpeg"
import { FaSearch, FaHome, } from "react-icons/fa"
import Signup from './Signup'
import {  BsPeopleFill, BsBriefcaseFill } from "react-icons/bs"
const Nav = () => {
  return (
    <div className="flex content-center container  justify-between  gap-3 p-3 ">
    <div className="flex gap-3 items-center">
    <img className="w-10" src={logo} alt="" />
     <div className="flex bg-slate-100  shadow-sm p-2 px-2 rounded content-center items-center">
     <FaSearch /><input className=" placeholder:italic placeholder:text-slate-400 block bg-slate-100 w-60   pl-4 pr-3  focus:outline-none  sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
     </div>
    </div>
   <div className='flex gap-2'>
   <button type="button" class="p-2 rounded hover:bg-slate-100" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Log in
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>


<button type="button" class=" rounded p-2 text-blue-700  border-2 border-blue-700 " data-bs-toggle="modal" data-bs-target="#staticbackdrop">
  Create  account
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="staticbackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog text-center">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title text-center fs-5" id="staticBackdropLabel">Sign up</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <Signup />
      </div>
      {/* <div class="modal-footer"> */}
        {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
        {/* <button type="button" class="btn btn-primary mx-auto block  ">Undedddrstood</button> */}
      {/* </div> */}
    </div>
  </div>
</div>
</div>
   {/* <!-- Button trigger modal --> */}



   
      



      </div>
  )
}

export default Nav
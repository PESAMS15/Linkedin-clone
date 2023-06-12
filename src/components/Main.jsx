import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { FaSearch, FaHome, FaListAlt, FaPodcast, FaHeart,FaLightbulb, FaVideo, FaTag,  FaBell, FaRegBell } from "react-icons/fa"
import {  BsPeopleFill, BsBriefcaseFill, BsShop } from "react-icons/bs"
import Icons from './Icons'

const Main = () => {
    const [posts, setposts] = useState(null)

    useEffect(() => {
    axios.get("http://localhost:5690/posts")
      .then((res)=> setposts(res.data.slice().reverse())) 
    //   .then(console.log(posts))
      
    }, [posts])
    
      
  return (
    <div className='bg-slate-50'>
        <div className="container-md w-full flex">
            <div className="flex gap-2 my-2 w-full  justify-content-between">
                <div className="p-2 w-68  hidden md:block">
                    <Icons icon="🏠" title="Home" />
                    <Icons icon="📃" title="Listings" />
                    <Icons icon="🎙️" title="Podcast" />
                    <Icons icon="📽️" title="Videos" />
                    <Icons icon="🏷️"title="Tags" />
                    <Icons icon="💡" title="FAQ" />
                    <Icons icon="🛍️" title="Forem Shop" />
                    <Icons icon="❣️" title="Sponsors" />
                    <Icons icon="🧑‍💻" title="About" />
                    <Icons icon="📨" title="Contact" />
                    <Icons icon="👍" title="Code of Conduct" />
                    <Icons icon="🔏" title="Privacy Policy" />
                    <Icons icon="🤔" title="Software Comparisons" />
                  
                </div>
                <div className='w-full md:w-1/2 rounded'>
                    {posts && posts.map((el)=>(
                        <div className='my-3'>
                            <div className="flex items-center gap-2">
                            <img className='w-10' src={el.profilePic} alt="" />
                            <div className='font-semibold'>{el.author}</div>
                            </div>
                            <div className='mt-2'>{el.content}</div>
                            <img className='rounded' src={el.img} alt="" />
                        </div>
                    ))}
                </div>
                <div className='w-1/4 bg-white shadow rounded hidden lg:block'>
                    <div className="flex justify-between items-center p-2">
                        <h4 className='font-semibold'>Listings</h4>
                        <p className="text-blue-700">See all</p>

                    </div>
                </div>
            </div>
           

        </div>
    </div>
  )
}

export default Main
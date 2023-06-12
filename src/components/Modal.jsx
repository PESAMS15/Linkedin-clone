import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import {  HiPhotograph, HiVideoCamera } from "react-icons/hi"
import { HiCalendarDays } from "react-icons/hi2"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'




export default function Example({opened, closed }) {
    const [image, setImage] = useState('');
    const [content, setcontent] = useState("")
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onload = (event) => {
          setImage(event.target.result);
          console.log(image)
        };
    
        if (file) {
          reader.readAsDataURL(file);
        }
      };
    let ref = localStorage.getItem("user")
    let coref = JSON.parse(ref)
    console.log(coref)
  const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef(null)

  const post = () => {
    const currentTime = new Date();
    const timeDifference = Math.floor((currentTime - new Date()) / 60000); // Calculate the time difference in minutes
  
    let publishedAt = '';
  
    if (timeDifference < 1) {
      publishedAt = 'Just now';
    } else if (timeDifference < 60) {
      publishedAt = `${timeDifference} minutes ago`;
    } else if (timeDifference < 1440) {
      const hoursAgo = Math.floor(timeDifference / 60);
      publishedAt = `${hoursAgo} hours ago`;
    } else {
      const daysAgo = Math.floor(timeDifference / 1440);
      publishedAt = `${daysAgo} days ago`;
    }
  
    let data = {
      author: coref.username,
      content,
      profilePic: coref.profilePic,
      img: image,
      publishedAt: publishedAt // Add the formatted time string to the data
    };
  
    axios
      .post('http://localhost:5690/posts', data)
      .then((res) => {
        console.log(res);
        toast.success('Post successful');
      })
      .then(() => {
        setImage('');
        setcontent('');
        closed();
      })
      .catch((error) => {
        console.error('Error posting:', error);
        toast.error('Error posting');
      });
  };
  

  return (
    <Transition.Root show={opened} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg px-3 p-2 bg-white m-auto text-left shadow-xl transition-all w-full  sm:w-1/2 md:1/3 ">
              <div className="text-end items-center  flex justify-between">
                <div>
                <div className="flex gap-2">
                <img className='w-10' src={coref? coref.profilePic : ""} alt="" />
                <h3>{coref? coref.username : "User"}</h3>
                </div>
                </div>
              <button
                    type="button"
                    className=" flex justify-items-end    rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={closed}
                    ref={cancelButtonRef}
                  >
                    X
                  </button>
              </div>
              <div>
                    <input value={content} placeholder='What do u want to talk about' onChange={(e)=> setcontent(e.target.value)} className='w-full p-3 focus:outline-none py-3' ></input>
                    {image && <img className="w-full rounded " src={image} alt="Selected" />}
                    <div className="flex gap-3 items-center">
                        <div className="">
                           <label className='p-3 mt-1 text-2xl rounded-full bg-slate-200 ' htmlFor="photo"> <HiPhotograph  /></label> <input type="file" onChange={handleImageChange} className='hidden' id='photo' />
                            </div>
                        <div className="p-3 text-2xl rounded-full bg-slate-200 "><HiVideoCamera  /></div>
                        <div className="p-3 text-2xl rounded-full bg-slate-200 "><HiCalendarDays  /></div>
                    </div>
                    <hr />
                    <div className="py-2  flex justify-end">
                        <button onClick={post} className='bg-black text-white p-2 px-3 rounded font-bold'>post</button>
                    </div>
                    <ToastContainer 
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
              </div>
              
                
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

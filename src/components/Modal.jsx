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

  const post = ()=>{
    let data = {
        content,
        img: image
    }
    axios.post("http://localhost:5690/posts", data)
    .then((res)=>{
        console.log(res)
        toast.success("registration Successful")
    })
  }

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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg px-3 p-2 bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="text-end items-center  flex justify-between">
                <div>
                <h3>{coref.username}</h3>
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
                    <textarea placeholder='What do u want to talk about' onChange={(e)=> setcontent(e.target.value)} className='w-full p-3 focus:outline-none' name="" id="" cols="40" rows="10"></textarea>
                    {image && <img className="w-full " src={image} alt="Selected" />}
                    <div className="flex gap-3 items-center">
                        <div className="">
                           <label className='p-3 mt-1 text-2xl rounded-full bg-slate-200 ' htmlFor="photo"> <HiPhotograph  /></label> <input type="file" onChange={handleImageChange} className='hidden' id='photo' />
                            </div>
                        <div className="p-3 text-2xl rounded-full bg-slate-200 "><HiVideoCamera  /></div>
                        <div className="p-3 text-2xl rounded-full bg-slate-200 "><HiCalendarDays  /></div>
                    </div>
                    <hr />
                    <div className="py-2 flex justify-end">
                        <button onClick={post} className='bg-black text-white p-2 rounded font-bold'>post</button>
                    </div>
              </div>
              
                
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

import React from 'react'
import { useFormik } from 'formik'
import { useState, useEffect } from 'react'
import * as yup from "yup"
import axios from 'axios'
import log from "../Assets/OIP.jpeg"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
const Signup = () => {
    const navigate = useNavigate()
    const [alluser, setalluser] = useState(null)
    const [err, seterr] = useState("")
    useEffect(() => {
      axios.get("http://localhost:5690/signup")
      .then((res)=> setalluser(res.data)) 
      .then(console.log(alluser))
      .catch((err)=>{
            console.log(err)
      })
    }, [])
    console.log(alluser)
    const formik = useFormik({
        initialValues:{
            username: "",
            email: "",
            password: "",
            profilePic: ""
        },  
        validationSchema: yup.object({
            username: yup.string().min(5, "Name must have at least 6 characters").required("this field is required"),
            email: yup.string().email("Must be a valid email ").required("this field is required"),
            password: yup.string().min(6, "password too short").max(8, "password too long").required("this field is required"),
            profilePic: yup.string().default("https://th.bing.com/th/id/OIP.1DLYAqE5UY19idJJOkFQegHaHa?w=205&h=205&c=7&r=0&o=5&pid=1.7")
        }),
        onSubmit: (values)=>{
            console.log(values)
            let exist = alluser.find((el)=> el.email === values.email || el.username=== values.username)
            console.log(exist);
            if(exist){
                toast.error("User already exist")
            }
            else{
                axios.post("http://localhost:5690/signup", values)
                .then((res)=>{
                    console.log(res)
                    toast.success("registration Successful")
                }).then(navigate("/login"))
                .catch((err)=>{
                    console.log(err)
                    seterr(err)
                    toast.error("registration Failed")
                })
            }
        }
    })

  return (
    <div>
            <form className='w-full text-center p-3 mx-auto shadow-lg   flex flex-col gap-y-9 md:w-1/2 shadow-md-none' onSubmit={formik.handleSubmit} action="">
            <div className='mt-3'>
            <img className="w-32 mx-auto rounded-full" src={log} alt="" />
            <h1 className="text-black font-bold text-center">Sign up</h1>
            </div>
            <div className="form-group">
                <label htmlFor="" className='font-bold text-sm text-'>Username</label>
                <input name='username' onChange={formik.handleChange}  type="text" className={formik.errors.username? "is-invalid form-control": "form-control"} />
                <small className='text-danger'>{formik.errors.username}</small>
            </div>
            <div className="form-group">
                <label htmlFor="" className='font-bold text-sm text-'>email</label>
                <input name='email' onChange={formik.handleChange}  type="email" className={formik.errors.email? "is-invalid form-control": "form-control"} />
                <small className='text-danger'>{formik.errors.email}</small>

            </div>
            <div className="form-group">
                <label htmlFor="" className='font-bold text-sm text-'>password</label>
                <input name='password' onChange={formik.handleChange}  type="password" className={formik.errors.password? "is-invalid form-control": "form-control"} />
                <small className='text-danger'>{formik.errors.password}</small>

            </div>
            <button type='submit'  className='py-3 rounded bg-black text-white font-bold w-75 mx-auto '>Register</button>
            <Link to="/login" className="text-xs">already have an account, login</Link>
            <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </form>
    </div>
  )
}

export default Signup
import React from 'react'
import { useFormik } from 'formik'
import { useState, useEffect } from 'react'
import * as yup from "yup"
import axios from 'axios'
import log from "../Assets/OIP.jpeg"
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
const Login = () => {
    const [alluser, setalluser] = useState(null)
    const navigate = useNavigate()
    const [err, seterr] = useState("")
    useEffect(() => {
      axios.get("http://localhost:5690/signup")
      .then((res)=> setalluser(res.data)) 
      .then(console.log(alluser))
      .catch((err)=>{
            console.log(err)
      })
    }, [])
    const formik = useFormik({
        initialValues:{
            email: "",
            password: ""
        },  
        validationSchema: yup.object({
            email: yup.string().email("Must be a valid email ").required("this field is required"),
            password: yup.string().required("this field is required")
        }),
        onSubmit: (values)=>{
            console.log(values)
            let exist = alluser.find((el)=> el.email === values.email && el.password=== values.password)
            console.log(exist);
            if(exist){
                toast.success(`Login Successful`)
                let save = localStorage.setItem("user", JSON.stringify(exist))
                setTimeout(() => {
                    navigate("/home")
                }, 2000);
            }
            else{
               toast.error("Incorrect email or password")
            }
        }
    })
    console.log(formik.errors)

    

  return (
    <div>
            <form className='w-full text-center p-3 mx-auto shadow-lg   flex flex-col gap-y-9 md:w-1/2 shadow-md-none' onSubmit={formik.handleSubmit} action="">
            <div className='mt-3'>
            <img className="w-32 mx-auto rounded-full" src={log} alt="" />
            <h1 className="text-black font-bold text-center">Login</h1>
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

export default Login
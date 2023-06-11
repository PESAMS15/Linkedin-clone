import React from 'react'
import { useFormik } from 'formik'
import { useState } from 'react'
import * as yup from "yup"
const Signup = () => {
    const [err, seterr] = useState("")
    const formik = useFormik({
        initialValues:{
            username: "",
            email: "",
            password: ""
        },  
        validationSchema: yup.object({
            username: yup.string().min(5, "Name must have at least 6 characters").required("this field is required"),
            email: yup.string().email("Must be a valid email ").required("this field is required"),
            password: yup.string().min(6, "password too short").max(8, "password too long").required("this field is required")
        }),
        onSubmit: (values)=>{
            console.log(values)
        }
    })

  return (
    <div>
            <form className='w-100 text-center p-3 mx-auto flex flex-col gap-y-9' onSubmit={formik.handleSubmit} action="">
            {/* <h1 className="text-primary text-center">Sign up</h1> */}
            <div className="form-group">
                <label htmlFor="" className=' text-sm text-'>Username</label>
                <input name='username' onChange={formik.handleChange}  type="text" className={formik.errors.username? "is-invalid form-control": "form-control"} />
                <small className='text-danger'>{formik.errors.username}</small>
            </div>
            <div className="form-group">
                <label htmlFor="" className=' text-sm text-'>email</label>
                <input name='email' onChange={formik.handleChange}  type="email" className={formik.errors.email? "is-invalid form-control": "form-control"} />
                <small className='text-danger'>{formik.errors.email}</small>

            </div>
            <div className="form-group">
                <label htmlFor="" className=' text-sm text-'>password</label>
                <input name='password' onChange={formik.handleChange}  type="password" className={formik.errors.password? "is-invalid form-control": "form-control"} />
                <small className='text-danger'>{formik.errors.password}</small>

            </div>
            <button type='submit' data-bs-dismiss="modal" className='btn bg-black text-white font-bold w-75 mx-auto '>Register</button>
            {/* <ToastContainer 
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
            /> */}
        </form>
    </div>
  )
}

export default Signup
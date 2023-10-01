import React, { useState } from 'react'
import InputComp from '../components/InputComp'
import { Link , useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import { registerUser } from '../api/Internal'

const yupSchema = yup.object().shape({
    username : yup.string().matches( /^[a-zA-Z0-9]+$/,"Username must be Alpha Numeric !").required("Username is Required ! "),
    email : yup.string().email("Invalid Email").required("Email is Required ! "),
    password : yup.string().matches(/^[a-zA-Z0-9]+$/  , "Password Must be Alpha Numeric").required("Password is Required ! "),
})


const SignUp = () => {


    const navigate = useNavigate()

    const {handleSubmit , formState : {errors} , register , reset} = useForm({
        resolver : yupResolver(yupSchema)
    })

    const [Errors , setError] = useState("")
    const SubmitHandler = async (data) => {


        console.log(errors);
        let response = await registerUser(data)


        if(response.status === 201){
            navigate("/login")
        }else if(response.code === 'ERR_BAD_REQUEST'){

            setError(response.response.data.message)
        }

        console.log(response.data);
    }
  return (
    <section className='flex justify-center items-center min-h-[80vh]'>
    <form className='max-w-[400px] w-[96%] text-center  space-y-4'
    onSubmit={handleSubmit(SubmitHandler)}
    >
        <h2 className='text-2xl font-[600] '>Register To Your Account</h2>
      <InputComp type={'text'} register={register} errors={errors} placeholder={'Username'}/>
      <InputComp type={'text'} register={register} errors={errors} placeholder={'Email'}/>
      <InputComp type={'text'} register={register} errors={errors} placeholder={'Password'}/>
      <button 
      disabled={Object.keys(errors).length > 0 ? true : false}
      className='text-white  p-2 rounded bg-slate-700 w-[96%] text-center disabled:opacity-80 hover:opacity-95' type='submit'>SIGN UP</button>
    <p>Have an Account ? <Link to={'/login'} className='text-blue-500'>Register</Link></p>
    {Errors && <p className='text-red-500'>{Errors}</p>}
    </form>
    </section>
  )
}

export default SignUp

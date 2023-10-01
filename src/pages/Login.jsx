import React from 'react'
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
const yupSchema = yup.object().shape({
    username : yup.string().matches( /^[a-zA-Z0-9]+$/,"Username must be Alpha Numeric !").required("Username is Required ! "),
    password : yup.string().matches(/^[a-zA-Z0-9]+$/ , "Password Must be Alpha Numeric").required("Password is Required ! "),
})

const Login = () => {
    const navigate = useNavigate()

    const {handleSubmit , formState : {errors} , register , reset} = useForm({
        resolver : yupResolver(yupSchema)
    })

    const SubmitHandler = async (data) => {


        let response = await registerUser(data)


        if(response.status === 200){
            navigate("/login")
        }else if(response.code === 'ERR_BAD_REQUEST'){

            setError(response.response.data.message)
        }
    }
  return (
    <section className='flex justify-center items-center min-h-[80vh]'>
    <form className='max-w-[400px] w-[96%] text-center  space-y-4'
    onSubmit={handleSubmit(SubmitHandler)}
    >
        <h2 className='text-2xl font-[600] '>Register To Your Account</h2>
      <InputComp type={'text'} register={register} errors={errors} placeholder={'Username'}/>
      <InputComp type={'text'} register={register} errors={errors} placeholder={'Password'}/>
      <button className='text-white  p-2 rounded bg-slate-700 w-[96%] text-center disabled:opacity-80 hover:opacity-95' type='submit'>SIGN UP</button>
    <p>New Here ? <Link to={'/signup'} className='text-blue-500'>Login</Link></p>
    </form>
    </section>
  )
}

export default Login

import React from 'react'

const InputComp = ({type,placeholder , register , errors}) => {
    
  return (
    <div className='w-full  p-2'>
      <input placeholder={placeholder} type={type} className={`${errors[placeholder.toLowerCase()] && 'border-red-500 '} outline-none p-2 border w-full`} {...register(placeholder.toLowerCase())}/>
      {errors[placeholder.toLowerCase()] &&  <p className='text-red-500'>{errors[placeholder.toLowerCase()].message}</p>}
    </div>
  )
}

export default InputComp

import React from 'react'
import { Link } from 'react-router-dom'
import {BiSearch} from 'react-icons/bi'
const Header = () => {
  return (
    <header className='bg-slate-200'>
      <nav className='container mx-auto text-[18px] flex justify-between items-center p-3'>
        <h2 className='text-2xl sm:text-3xl'><span className='text-gray-400'>POP</span><span className='text-gray-500'>State</span></h2>
        <form className='flex rounded w-28 md:w-64 justify-between items-center bg-slate-100 p-3'>
            <input placeholder='Search...' type='text' className='outline-none bg-slate-100 w-full'/>
            <BiSearch size={24} color='#ccc'/>
        </form>

        <ul className='flex space-x-6'>
            <Link to={'/'} className='cursor-pointer hidden sm:inline-block'>
            <li>Home</li>
            </Link>
            <Link to={'/profile'} className='cursor-pointer hidden sm:inline-block'>
            <li>Profile</li>
            </Link>
            <Link to={'/signup'} className='cursor-pointer '>
            <li>Signup</li>
            </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header

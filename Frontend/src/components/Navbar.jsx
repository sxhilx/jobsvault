import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../assets'

const Navbar = () => {
  return (
    <div className='w-full bg-transparent border-b border-gray-300 font-primary'>
        <div className='max-w-7xl px-2 mx-auto flex justify-between py-3'>
            <div className='flex justify-center items-center'>
                <img src={Logo} alt="Logo" className='w-9' />
                <h1 className='text-xl font-semibold'>JobsVault</h1>
            </div>
            <div className='flex justify-center items-center gap-6'>
                <Link to="/login" className='text-sm hover:text-gray-800 font-medium'>Sign In</Link>
                <Link to="/register" className='block bg-black text-white text-sm px-3 py-2 font-medium rounded-lg hover:bg-gray-800'>Get Started</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar
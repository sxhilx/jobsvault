import React from 'react'
import { Navbar } from '../components'
import { Rocket } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-100 to-white">
        <div>
            <Navbar/>
        </div>
        <div className='max-w-5xl px-2 mx-auto flex flex-col justify-center items-center mt-20 md:mt-32 space-y-10'>
            <div className='flex justify-center items-center text-sm gap-2 border border-gray-300 rounded-xl py-1 px-2'>
                <span><Rocket size={14} className='text-gray-400'/></span>
                <span className='text-gray-400 text-xs md:text-sm'> 
                    Supercharge your job hunt. Track applications with ease.
                </span>
            </div>
            <div className=" flex flex-col justify-center items-center space-y-10">
                <div className="text-5xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-indigo-800 to-purple-600 bg-clip-text animate-fade-in text-center">
                    Stay Organized. Track Your Job Applications.
                </div>
                <div className='text-gray-500 text-center text-lg'>
                    Organize and track your job applications effortlessly with our intuitive tracking system. Stay in control of your career journey and never lose sight of an opportunity
                </div>
                <div className='flex justify-center items-center gap-5'>
                    <Link to="/register" className='block bg-black text-white px-7 py-2 font-medium rounded-full hover:scale-105 transition duration-150'>Get Started →</Link>
                    <Link to="/login" className='block bg-white text-black px-6 py-2 font-medium rounded-full hover:shadow-lg hover:bg-slate-100 transition duration-150'>Sign In</Link>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Home
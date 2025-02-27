import React, { useState } from 'react'
import { LogIn, Mail, Lock, ArrowRight } from 'lucide-react'
import {loginUser} from '../controllers/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("") 
  const [password, setPassword] = useState("") 
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("")
    setLoading(true)
    try {
      const response = await loginUser({email, password})
      localStorage.setItem("token", response.token);
      navigate('/dashboard')
    }catch (error) {
      setError(error.response.data.msg);
      setLoading(false)
  }  
  }
  return (
    <div className='flex justify-center w-full min-h-screen items-center bg-[#F9F9FA] font-primary'>
      <div className='md:mt-10 flex flex-col justify-center items-center p-6 max-w-xl border border-[#E5E7EB] bg-white rounded-xl'>
          <LogIn size={32}/>
          <h1 className='text-2xl font-semibold'>Welcome Back</h1>
          {error && <p className="text-red-500 text-sm my-2">{error}</p>}
         <form onSubmit={handleLogin} className='flex flex-col'>
              <div className='mt-6'>
              <label htmlFor="email" className='ml-1 text-xs font-semibold'>Email</label>
              <div className='relative my-2'>
                <input 
                type="text" 
                className='w-full border border-[#E5E7EB] rounded-lg pl-10 pr-3 py-2 outline-none focus:ring focus:ring-slate-950 placeholder:text-sm' 
                placeholder='Enter Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
                <Mail size={18} className='absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7F7F7F]'/>
              </div>
              </div>

              <div className='mb-6'>
                <label htmlFor="password" className='ml-1 text-xs font-semibold'>Password</label>
                <div className='relative my-2'>
                  <input 
                  type="password" 
                  className='w-full border border-[#E5E7EB] rounded-lg pl-10 pr-3 py-2 outline-none focus:ring focus:ring-slate-950 placeholder:text-sm' 
                  placeholder='Enter Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required />
                  <Lock size={18} className='absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7F7F7F]'/>
                </div>
              </div>

              <button type="submit" className='flex justify-center items-center gap-3 bg-black text-white rounded-lg py-2 font-medium text-sm cursor-pointer hover:bg-gray-800'>
              {loading ? ('Loading...') : (<> Sign in <ArrowRight size={14}/> </>)}
              </button>          
         </form>
         <span className='text-sm mt-4 font-normal'>
         Don't have an account? <a href="/register" className='hover:underline'>Sign up</a>
         </span>
      </div>
    </div>
  )
}

export default Login
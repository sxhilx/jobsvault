import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Building, BriefcaseBusiness, FileText, ArrowRight } from 'lucide-react'
import { editJob, getjob } from '../controllers/jobs';

const EditJob = () => {
  const {jobId} = useParams();

  const [loading, setLoading] = useState(false)
  const [updating, setUpdatig] = useState(false)
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [status, setStatus] = useState('pending');
  const navigate = useNavigate()

  useEffect(() => {
    
    const getJobDetails = async () => {
      setLoading(true)
      try {
        const response = await getjob(jobId);    
        if(response.job){
          setCompany(response.job.company)
          setPosition(response.job.position)
          setStatus(response.job.status)
        }
        setLoading(false)
      } catch (error) {
        console.error("Error while fetching job details: ", error);
        setLoading(false)
        throw error
      }

    }

    getJobDetails()
  },[])

  const handleUpdate = async(e)=>{
    e.preventDefault();
    setUpdatig(true)
    try {
      await editJob(jobId, {company, position, status})
      navigate('/dashboard')
    } catch (error) {
      console.error("Error why updating: ", error.msg);
      setUpdatig(false)
    }
  }
  

 

  return (
    <div className='max-w-6xl mx-auto font-primary px-2 flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-semibold mt-20 '>Update your Job </h1>
      <span className="text-gray-400 mt-2">Update your job application details</span>

      {loading ? (
          <div className='lg:min-w-3xl mx-2 border border-[#E5E7EB] px-10 py-5 my-10 rounded-2xl shadow animate-pulse'>
          <div className="space-y-6">
            {/* Company Field */}
            <div>
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
              <div className="h-10 bg-gray-200 rounded-lg relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 bg-gray-300 rounded-full"></div>
              </div>
            </div>
        
            {/* Position Field */}
            <div>
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
              <div className="h-10 bg-gray-200 rounded-lg relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 bg-gray-300 rounded-full"></div>
              </div>
            </div>
        
            {/* Status Field */}
            <div>
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
              <div className="h-10 bg-gray-200 rounded-lg relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 bg-gray-300 rounded-full"></div>
              </div>
            </div>
        
            {/* Submit Button */}
            <div className="h-10 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      ) : (
        <div className='lg:min-w-3xl mx-2 border border-[#E5E7EB] px-10 py-5 my-10 rounded-2xl shadow'>
        <form onSubmit={handleUpdate}>
          <div className=''>
            <label htmlFor="company" className='ml-1 font-semibold'>Company</label>
            <div className='relative my-2'>
              <input 
              type="text" 
              className='w-full border border-[#E5E7EB] rounded-lg pl-10 pr-3 py-2 outline-none focus:ring focus:ring-slate-950 placeholder:text-sm' 
              placeholder='Enter Company'
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required />
              <Building size={18} className='absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7F7F7F]'/>
            </div>
          </div>
          <div className='mt-5'>
            <label htmlFor="position" className='ml-1 font-semibold'>Position</label>
            <div className='relative my-2'>
              <input 
              type="text" 
              className='w-full border border-[#E5E7EB] rounded-lg pl-10 pr-3 py-2 outline-none focus:ring focus:ring-slate-950 placeholder:text-sm' 
              placeholder='Enter Position'
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required />
              <BriefcaseBusiness size={18} className='absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7F7F7F]'/>
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="status" className="ml-1 font-semibold">Status</label>
            <div className="relative my-2">
              <select 
                id="status"
                className="w-full border border-[#E5E7EB] rounded-lg pl-10 pr-3 py-2 outline-none focus:ring focus:ring-slate-950 text-sm"
                value={status}
                onChange={(e) => setStatus(e.target.value)} 
                required
              >
                <option value="pending">Pending</option>
                <option value="interview">Interview</option>
                <option value="declined">Declined</option>
              </select>
              <FileText size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7F7F7F]" />
            </div>
          </div>

          <button type="submit" className='w-full flex justify-center items-center gap-3 bg-black text-white rounded-lg py-2 my-2 font-medium text-sm cursor-pointer hover:bg-gray-800'>
             {updating ? ('Updating...') : (<> Update job <ArrowRight size={14}/> </>)}
          </button> 
        </form>
      </div>
      )}
    </div>
  )
}

export default EditJob

import React, {useState} from 'react'
import { Building, BriefcaseBusiness, FileText, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import { createJob } from '../controllers/jobs';


const AddJob = () => {
  const [loading, setLoading] = useState(false)
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [status, setStatus] = useState('pending');
  const navigate = useNavigate()
  const [error, setError] = useState('');

  const addJob = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await createJob({ company, position, status });
      navigate('/dashboard');
    } catch (error) {
      console.error("Job add failed: ", error);
      setError('Failed to add job. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className='max-w-6xl mx-auto font-primary px-2 flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-semibold mt-20 '>Add a new Job </h1>
      <span className="text-gray-400 mt-2">Add a new job application</span>
      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
      <div className='lg:min-w-3xl mx-2 border border-[#E5E7EB] px-10 py-5 my-10 rounded-2xl shadow'>
        <form onSubmit={addJob}>
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
            <label htmlFor="status" className="ml-1 font-semibold text-lg">Status</label>
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
             {loading ? (<span className="loading loading-ring loading-sm"></span>) : (<> Add job <ArrowRight size={14}/> </>)}
          </button> 
        </form>
      </div>
    </div>
  )
}

export default AddJob
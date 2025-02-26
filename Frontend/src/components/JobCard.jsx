import React, { useState } from 'react';
import { PenIcon, Trash2 } from 'lucide-react'; 
import { useNavigate } from 'react-router-dom';
import { deleteJob } from '../controllers/jobs';


const JobCard = ({ jobs, setJobs }) => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    let statusColor = 'bg-blue-200 text-blue-900';
    if (jobs.status === 'interview') {
        statusColor = 'bg-yellow-200 text-yellow-900';
    } else if (jobs.status === 'declined') {
        statusColor = 'bg-red-200 text-red-900';
    }


    const handleEdit = () => { 
        navigate(`/edit-job/${jobs._id}`)
    }

    const handleDelete = async () => {
        setJobs((prevJob) => prevJob.filter(job => job._id !== jobs._id ))
        try {
            setLoading(true)
            await deleteJob(jobs._id);            
        } catch (error) {
            console.error(error);
            setJobs((prev) => [...prev, jobs])
            setLoading(false)                
        }
        
        setLoading(false)
    }

  return (
    <div className= 'max-w-96 rounded-xl border border-[#E5E7EB] text-[#0D0D0F] font-sans hover:shadow-lg transition duration-200'>
        <div className='p-6'>
            <div className='flex justify-between mb-3'>
                <h1 className='text-xl font-bold'>{jobs.company}</h1>
                <div className={`${statusColor} rounded-full flex justify-center items-center `}>
                    <span className='px-2 text-xs font-bold'>{jobs.status}</span>
                </div>
            </div>
            <div className='text-slate-600'>
                <p className='text-sm'>Position: {jobs.position}</p>
                <p className='text-sm'>Applied: {jobs.createdAt.split("T")[0]}</p>
            </div>
            <div className='flex justify-end mt-5 right-0 gap-3'>                
                    
                <button 
                onClick={handleEdit}
                className='flex items-center justify-center border border-[#E5E7EB] gap-2 px-3 py-1.5 rounded-lg hover:cursor-pointer hover:bg-slate-100 transition duration-200'>
                    <PenIcon size={18}/>
                    <span className='text-sm font-medium'>Edit</span>                    
                </button>
                
                <button 
                onClick={handleDelete}
                className='flex items-center justify-center bg-red-500 gap-2 px-3 py-1.5 rounded-lg text-white hover:cursor-pointer hover:bg-red-700 transition duration-200'>
                    {loading ? ('Deleting...') : (<> <Trash2 size={18} /> Delete </>)}
                </button>
            </div>
        </div>
    </div>
  );
}

export default JobCard;

import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import { Plus } from "lucide-react";
import { getAllJobs } from "../controllers/jobs";
import { useLoaderData } from "react-router-dom";


const Dashboard = () => {
    const data = useLoaderData();
    const [jobs, setJobs] = useState([])    
    
    useEffect(() => {
        if(data && data.jobs){
            setJobs(data.jobs)
        }
    }, [data])
    
    return(
        <div className="max-w-6xl mx-auto font-primary px-2">

            <div className="flex items-center justify-between">
                <div className="flex flex-col">
                    <h1 className="text-4xl font-semibold mt-10">Job Applications</h1>
                    <span className="text-gray-400 mt-2">Track and manage your job applications</span>
                </div>
                <div className="flex justify-between mt-3">
                    <a href="/add-job" className="bg-black text-white flex justify-center items-center py-3 px-2 rounded-lg text-sm gap-1 font-medium cursor-pointer hover:bg-gray-800">
                        <span><Plus size={18}/></span>
                        New Application
                    </a>
                </div>
            </div>
            

            {jobs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
                   {jobs.map((job) => (                        
                        <JobCard key={job._id} jobs={job} setJobs={setJobs}/>                    
                    ))}
                </div>
            ): (
                <div className="flex flex-col justify-center items-center mt-20">
                    <p className="text-gray-500 mt-4 text-lg">No job applications.</p>
                </div>
            )}

        </div>
    );
}

export default Dashboard;

export const fetchJobs = async () => {
    try {
        const response = await getAllJobs()
        return response;
    } catch (error) {
        console.error("Error Fetching jobs ", error);
        throw error;
    }
}


import API from "./axios";

export const createJob = async(jobData) => {
    try {
        const response = await API.post("/jobs", jobData)        
        return response.data;
    } catch (error) {
        console.error("Error while creating job: ", error);
    }
}

export const getAllJobs = async() => {
   try {
    const response = await API.get("/jobs")
    return response.data;
   } catch (error) {
    console.error("Error while fetching jobs: ", error);
    throw error
   } 
}

export const getjob = async(jobId) => {
    try {
     const response = await API.get(`/jobs/${jobId}`);
     return response.data;
    } catch (error) {
     console.error("Error while fetching this job: ", error);
    } 
}

export const editJob = async(jobId, jobData) => {
    try {
        const response = await API.patch(`/jobs/${jobId}`, jobData)
        return response.data
    } catch (error) {
        console.error("Error while updating the job", error)
    }
}

export const deleteJob = async(jobId) => {
    try {
        const response = await API.delete(`/jobs/${jobId}`)
        return response.data
    } catch (error) {
        console.error("Error while deleting this job: ", error);
    } 
}

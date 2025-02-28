import axios from 'axios'

const API = axios.create({
    baseURL: 'https://jobs-api-i7qe.onrender.com/api/v1',
})

API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token")
    if(token){
        req.headers.Authorization = `Bearer ${token}`
    }
    return req
})

export default API
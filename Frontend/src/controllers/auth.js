import API from "./axios";
import {useNavigate} from 'react-router-dom'

export const registerUser = async (userData) => {
    try {
        const response = await API.post("/auth/register", userData);
        return response.data;
    } catch (error) {
        console.error("Register Error:", error.response?.data || error.message);
        throw error;        
    }
}

export const loginUser = async (userData) => {
    try {
        const response = await API.post("/auth/login", userData)
        return response.data;
    } catch (error) {
        console.error("Login error: ", error.response?.data || error.message);
        throw error;
    }
}

export const logout =  () => {
    const navigate = useNavigate();
    try {
        localStorage.removeItem("token");
        navigate("/login")
    } catch (error) {
        console.error("Error during logout: ", error);     
        throw error;   
    }
}
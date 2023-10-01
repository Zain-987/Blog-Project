import axios from 'axios'


const api = axios.create({
    baseURL : 'http://localhost:3002',
    withCredentials : true,
})

export const registerUser = async (data) => {
    try{
        let response = await api.post("/api/v1/register/",data)

        return response
    }catch(error){
        return error
    }
}
export const loginUser = async (data) => {
    try{
        let response = await api.post("/api/v1/login/",data)

        return response
    }catch(error){
        return error
    }
}

export const googleAuth = async (data) => {
    try{
        let response = await api.post("/api/v1/google/",data)
        return response
    }catch(error){
        return error
    }
}
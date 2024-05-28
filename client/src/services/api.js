import axios from "axios";
import { getItem } from "../helpers/cookie-storage";

axios.defaults.baseURL = 'http://localhost:5050/api'

axios.interceptors.request.use(config => {
    const token = getItem('token')
    const authorization = token ? `Token ${token}` : '' 
    config.headers.Authorization = authorization
    return config

    // console.log(authorization)
})

export default axios
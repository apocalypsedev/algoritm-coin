import axios from "axios";
import { getItem } from 

axios.defaults.baseURL = 'http://localhost:5050/api'
axios.interceptors.request.use(config => {
    const token = getItem('token')
    const authrization = token ? `Token ${token}` : ""
    config.headers.Authorization = authrization
    return config
})

export default axios
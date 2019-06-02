import axios from 'axios'
import { host } from '../config'

const axiosInstance = axios.create({
    baseURL: host,
    responseType: "json"
    // withCredentials: true,
});

export default axiosInstance;
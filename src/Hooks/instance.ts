import axios from "axios";
import type { AxiosRequestConfig  } from "axios";

// Creates an instance of axios
const instance = axios.create({
    baseURL: "http://localhost:5000/",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "timeout": 1000
    }
});

// Handles axios interceptors, so the useful data can be reached directly
instance.interceptors.response.use((res) => res.data.data,
(err) => {
    if (err.response) {
        return Promise.reject(err.response.data);
    }
    if (err.request) {
        return Promise.reject(err.request);
    }
    return Promise.reject(err.message);
});

/**
 * Replaces main `axios` instance with the custom-one.
 * 
 * @param cfg - Axios configuration object.
 * @return A promise object of a response of the HTTP request with the 'data' object already
 * destructured
 */

const axiosInstance = (cfg: AxiosRequestConfig) => instance.request<any>(cfg);

export default axiosInstance
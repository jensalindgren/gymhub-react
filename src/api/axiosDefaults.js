import axios from "axios";

// Axios default values
axios.defaults.baseURL = "https://drf-api-backend.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

// Axios instance for both request and response
export const axiosInstance = axios.create();


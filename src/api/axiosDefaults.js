// API
import axios from "axios";

// Axios default values
axios.defaults.baseURL = "https://drf-api-backend.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

// Axios request with the above default custom values
export const axiosReq = axios.create();
export const axiosRes = axios.create();


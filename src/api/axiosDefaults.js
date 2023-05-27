// API
import axios from "axios";

// Axios default values
axios.defaults.baseURL = "https://drf-api-backend.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multi-part/form-data";
axios.defaults.withCredentials = true;

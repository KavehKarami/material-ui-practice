import axios from "axios";

const axiosIntance = axios.create({
  baseURL: "http://localhost:8000/",
});

export default axiosIntance;

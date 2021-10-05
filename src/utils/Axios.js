import axios from "axios";

const axiosConfig = {
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 30000,
};

export default axios.create(axiosConfig);

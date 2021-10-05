import axios from "axios";

const axiosConfig = {
  baseURL: "https://money-manager-backend2.herokuapp.com",
  timeout: 30000,
};

export default axios.create(axiosConfig);

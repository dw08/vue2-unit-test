import axios from "axios";

// 以入参为出参
let response = {};

const instance = axios.create({
  baseURL: "https://testRequest/",
  timeout: 3000
})

instance.interceptors.request.use(option => {
  response = option.data;
  return option
}, err => {
  return Promise.reject(err)
})

instance.interceptors.response.use(response => {
}, () => {
  return response;
})

export default instance;
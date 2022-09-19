import axios from 'axios';

const http = axios.create({
  baseURL:process.env.VUE_APP_API_BASE_URL,
  timeout:6000
});

http.interceptors.response.use((response)=>{
  return response.data;
});

export default http;
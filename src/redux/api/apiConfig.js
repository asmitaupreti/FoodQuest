import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: '/.netlify/functions/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosInstance

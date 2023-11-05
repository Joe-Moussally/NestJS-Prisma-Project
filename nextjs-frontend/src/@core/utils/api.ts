// ** Axios Imports
import axios from 'axios'

export const NEST_API = axios.create({
  baseURL: '/',
  timeout: 2 * 60 * 1000,
  withCredentials: true
})

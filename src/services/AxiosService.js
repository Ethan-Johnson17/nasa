import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})


export const imageDB = Axios.create({
  baseURL: 'https://api.nasa.gov/planetary/',
  timeout: 8000
})
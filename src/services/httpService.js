import axios from "axios"

axios.defaults.baseURL = "http://localhost:5000"

export const http = {
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
  post: axios.post,
}
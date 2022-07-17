import axios from "axios"

//axios.defaults.baseURL = "http://localhost:5000"
axios.defaults.baseURL = "https://nodejs-post-app.herokuapp.com/api"

export const http = {
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
  post: axios.post,
}
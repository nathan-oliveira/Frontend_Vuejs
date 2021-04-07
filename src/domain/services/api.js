import axios from "axios";

const urlAPI = "http://localhost:3333";

const axiosInstance = axios.create({
  baseURL: urlAPI
})

axiosInstance.interceptors.request.use((config) => {
  const { token } = window.localStorage;

  if (token) {
    config.headers.Authorization = token;
  }

  return config;
},
  (error) => Promise.reject(error));

const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
  delete(endpoint) {
    return axiosInstance.delete(endpoint);
  },
  put(endpoint, body) {
    return axiosInstance.put(endpoint, body);
  },
  patch(endpoint, body) {
    return axiosInstance.patch(endpoint, body);
  },
  validateToken() {
    return axiosInstance.get("/notes");
  },
  login(dataForm, login) {
    if (login) return axiosInstance.post("/login", dataForm);
    return axiosInstance.post("/users", dataForm);
  }
}

export default api;

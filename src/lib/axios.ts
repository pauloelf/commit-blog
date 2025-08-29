import axios from "axios"

const api = axios.create({
  baseURL: "https://motivated-advice-17027cdcc0.strapiapp.com/api",
  headers: {
    "Content-Type": "application/json",
  },
})

export default api

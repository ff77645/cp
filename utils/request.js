import axios from 'axios'


const baseURL = 'http://localhost:9100/api'

const request = axios.create({
    baseURL,
})

request.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

request.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        return Promise.reject(error)
    }
)

export default request
import axios from 'axios'


const baseURL = 'http://locahost:9100/api'

const request = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
})

export default request
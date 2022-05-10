import axios from 'axios'

export const setupApi = axios.create({
    baseURL: "http://skripshit-be.test"
})
import axios from "axios";

export const agent = axios.create({
    baseURL: 'http://localhost:5276/api',
    headers: {
        'Content-Type': 'application/json'
    }
});
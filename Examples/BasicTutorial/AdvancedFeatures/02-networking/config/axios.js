import axios from "axios";

// set custom config here
const instance = axios.create({
    baseURL: 'https://dog.ceo/api/breed/',
    timeout: 1000
});

export default instance;
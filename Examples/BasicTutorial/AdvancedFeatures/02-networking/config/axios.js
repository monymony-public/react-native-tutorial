import axios from "axios";

const { token } = axios.CancelToken.source();
const cancel = axios.CancelToken.source().cancel;

// set custom config here
const instance = axios.create({
    baseURL: 'https://dog.ceo/api/breed/',
    timeout: 1000,
    cancelToken: token
});

instance.cancel = cancel;

export default instance;
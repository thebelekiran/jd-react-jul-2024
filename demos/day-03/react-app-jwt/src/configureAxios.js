import axios from 'axios';

function configureAxios() {
    // IN case you use fetch, you can create an interceptor-like feature following this - https://blog.logrocket.com/intercepting-javascript-fetch-api-requests-responses/
    axios.interceptors.request.use((config) => {
        config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        return config;
    });
}

export default configureAxios;
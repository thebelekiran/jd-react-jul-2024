import axios from "axios";

export default function configureAxios(){
    axios.interceptors.request.use((config) => {
        config.headers['Authorization'] = 'Bearer ' + localStorage('token');
        return config;
    })
}
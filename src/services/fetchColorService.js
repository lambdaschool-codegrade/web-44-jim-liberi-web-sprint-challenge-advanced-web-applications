// import { axiosWithAuth } from '../helpers/axiosWithAuth';
import axios from 'axios'

const fetchColors = () => {
    axios.interceptors.request.use(function(config) {
        const token = localStorage.getItem('token');
        config.headers.Authorization = token;
        return config;
    })
    return axios.get("http://localhost:5000/api/colors").then(res => res.data)
}

export const fetchColorService = {
    fetchColors   
}
// export default fetchColorService;
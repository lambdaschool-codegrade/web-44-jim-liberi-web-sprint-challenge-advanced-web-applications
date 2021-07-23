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

const saveEdit = (item) => {
    axios.interceptors.request.use(function(config) {
        const token = localStorage.getItem('token');
        config.headers.Authorization = token;
        return config;
    })
    return axios.put(`http://localhost:5000/api/colors/${item.id}`, { id: item.id, color: item.color, code: item.code.hex}).then(res => {
        return res
    })
}

const deleteColor = (item) => {
    axios.interceptors.request.use(function(config) {
        const token = localStorage.getItem('token');
        config.headers.Authorization = token;
        return config;
    })
    axios.delete(`http://localhost:5000/api/colors/${item.id}`).then(res => {
        return res
    })
}

export const fetchColorService = {
    fetchColors,
    saveEdit,
    deleteColor   
}
// export default fetchColorService;
import axios from "axios";

//Task List:
//Build and export a function used to send in our authorization token

export const axiosWithAuth = {
    login,
    logout    
}

function login(user) {
    const url = "http://localhost:5000/api/login";
    const headers = {
        'Content-Type': 'application/json'        
    }
    axios.post(url, { username: user.username, password: user.password}, { headers }).then(res => { 
        localStorage.setItem('token', res.data.payload)
        window.location.href="/bubbles"
    })    
}

function logout() {        
    axios.interceptors.request.use(function(config) {
        const token = localStorage.getItem('token');
        config.headers.Authorization = token;
        return config;
    })
    axios.post("http://localhost:5000/api/logout").then(res => {
        localStorage.removeItem('token')
        window.location.href="/"
    })
}
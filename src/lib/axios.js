import axios from "axios";

const api = axios.create({
    baseURL: "https://eventsphere-server-mfdb.onrender.com"
})

api.interceptors.request.use((req) => {
    return req;
}, (err) => { })

api.interceptors.response.use((response) => {
    return response.data.data;
}, (err) => { })
export default api
import axios from 'axios'
import { clearStorages, getItem, removeItem, setItem } from '../services/storage/storage.services';
import { useGlobalState } from '../../State/State';

const baseURL = import.meta.env.VITE_BASE_URL

const instance = new axios.create({
    baseURL: baseURL,
});

const onSuccess = (response) => {
    return response.data;
}

const onError = (err) => {
    if(err.response.status === 401) {
        const [isLogin, setIsLogin] = useGlobalState('isLogin');
        removeItem('token')
        window.location.pathname = '/Login'
        setIsLogin(false)
        setItem("isLogin", isLogin)
    }

    if (err.response.status >= 400 && err.response.status < 500) {
        alert("Client error: " + err.response.status)
    }

    return Promise.reject(err);
}

instance.interceptors.response.use(onSuccess, onError);

instance.interceptors.request.use((opt) => {
    // const token = getItem("token") ? JSON.parse(getItem("token")) : "";

    opt.headers.Authorization = 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzYTQyYjJjMC1jZTI1LTRhZjEtODRhNC0zMmM2Yjg3OTI5NDYiLCJqdGkiOiI4YjQ0ZDc1ZC03NThlLTQ5ZDctYmFlOS1iNDc2NTdiNzA2NDAiLCJlbWFpbCI6Im5hdmlkcmV6YWFiYmFzemFkZWg4QGdtYWlsLmNvbSIsIlVpZCI6IitGUGlJd3BVeU5TWi8xYzNkM2M1OHZiZ3A2bU5keEVrQTJmS1hraVhoVWc9RXM3ODg5OGQ5NjllZWY2ZWNhZDNjMjlhM2E2MjkyODBlNjg2Y2YwYzNmNWQ1YTg2YWZmM2NhMTIwMjBjOTIzYWRjNmM5MiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlN0dWRlbnQiLCJleHAiOjE3MzI4MTE1MTAsImlzcyI6IlNlcGVockFjYWRlbXkiLCJhdWQiOiJTZXBlaHJBY2FkZW15In0.p1BkMD98AqU7WSJdKiS_4sWYnVyDQLK5wUev_qcs2DI";
    return opt;
})

export default instance
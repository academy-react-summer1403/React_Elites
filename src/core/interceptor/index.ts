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
    opt.headers.Authorization = 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0NDNmYTJhZC1jM2U4LTQ5MWEtOTdjNC00Yzg4Y2ZmZjNkYmMiLCJqdGkiOiIwYWU5OTgwYy1kNjU2LTQyMjctODQ4MC1lMzFmOWU5OTRhYWIiLCJlbWFpbCI6Im5hdmlkcmV6YWFiYmFzemFkZWg4OUBnbWFpbC5jb20iLCJVaWQiOiJ0QTYwS3M1dTFHd1lsNUdrRm9EZnNMaytwNGlqV1duZENKREZNbUlvMmM0PUVzNzg4OThkOTY5ZWVmNmVjYWQzYzI5YTNhNjI5MjgwZTY4NmNmMGMzZjVkNWE4NmFmZjNjYTEyMDIwYzkyM2FkYzZjOTIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiU3R1ZGVudCIsIlRlYWNoZXIiLCJSZWZlcmVlIiwiQWRtaW5pc3RyYXRvciJdLCJleHAiOjE3MzIzNDA5MDEsImlzcyI6IlNlcGVockFjYWRlbXkiLCJhdWQiOiJTZXBlaHJBY2FkZW15In0.ZCIjBDzj-ABa86TIx6oSM2oK1z2rFngBXDqc9KN7cdM";
    return opt;
})

export default instance
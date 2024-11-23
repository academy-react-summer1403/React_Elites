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

    opt.headers.Authorization = 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0NDNmYTJhZC1jM2U4LTQ5MWEtOTdjNC00Yzg4Y2ZmZjNkYmMiLCJqdGkiOiIyNmUwMDE3Ny00MmFlLTRlNjctOTcxMC1lYzRjYzk3MzQ5ZDMiLCJlbWFpbCI6Im5hdmlkcmV6YWFiYmFzemFkZWg4OUBnbWFpbC5jb20iLCJVaWQiOiIvanVObGdhRHBuem4xbFRCaExZaGVPZnVQMWw0cTU2azRhTVhINkxRRXpVPUVzNzg4OThkOTY5ZWVmNmVjYWQzYzI5YTNhNjI5MjgwZTY4NmNmMGMzZjVkNWE4NmFmZjNjYTEyMDIwYzkyM2FkYzZjOTIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiU3R1ZGVudCIsIlRlYWNoZXIiLCJSZWZlcmVlIiwiQWRtaW5pc3RyYXRvciJdLCJleHAiOjE3MzI0NTY0MjIsImlzcyI6IlNlcGVockFjYWRlbXkiLCJhdWQiOiJTZXBlaHJBY2FkZW15In0.tPSyhxp0LE8QO8fQvf1PnWeG1d1ucc9TWnESwXJs6GI";
    return opt;
})

export default instance
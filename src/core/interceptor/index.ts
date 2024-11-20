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
    opt.headers.Authorization = 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0NDNmYTJhZC1jM2U4LTQ5MWEtOTdjNC00Yzg4Y2ZmZjNkYmMiLCJqdGkiOiI4OWEyZTlhNC1lZmVjLTRhZDQtODAxNS1lOTAxZTc0ZGRiMmUiLCJlbWFpbCI6Im5hdmlkcmV6YWFiYmFzemFkZWg4OUBnbWFpbC5jb20iLCJVaWQiOiJ3dGVMYjNQRndOa2d0MVh3c0RXNWtJSnVZenpMWnFYWDVONzRrR0ErMXY4PUVzNzg4OThkOTY5ZWVmNmVjYWQzYzI5YTNhNjI5MjgwZTY4NmNmMGMzZjVkNWE4NmFmZjNjYTEyMDIwYzkyM2FkYzZjOTIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiU3R1ZGVudCIsIlRlYWNoZXIiLCJSZWZlcmVlIiwiQWRtaW5pc3RyYXRvciJdLCJleHAiOjE3MzIxMTM2ODksImlzcyI6IlNlcGVockFjYWRlbXkiLCJhdWQiOiJTZXBlaHJBY2FkZW15In0.mC-HYFHk1RoY9ieph1UOiTWHA9BirFQphJlUmVTomx8";
    return opt;
})

export default instance
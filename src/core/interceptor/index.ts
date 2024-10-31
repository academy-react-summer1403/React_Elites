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
    const token = getItem("token") ? JSON.parse(getItem("token")) : "";
    opt.headers.Authorization = 'Bearer ' + token;
    return opt;
})

export default instance
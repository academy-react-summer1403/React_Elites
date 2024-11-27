import style from "./link.module.css";
import { useGlobalState } from "../../../../../State/State";


const Button = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');

    return (
        <button className={style.button}> تغییر رمز عبور</button>
    )
}

export { Button }
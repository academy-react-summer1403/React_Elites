import style from "./link.module.css";
import { useGlobalState } from "../../../../../State/State";


const Button = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');

    return (
        <div>
            <button className={style.button} type="submit" onClick={(e) => e.preventDefault()}> تغییر رمز عبور</button>
        </div>
    )
}

export { Button }
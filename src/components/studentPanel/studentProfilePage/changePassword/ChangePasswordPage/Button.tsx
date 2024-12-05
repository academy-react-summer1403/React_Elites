import style from "./link.module.css";
import { useGlobalState } from "../../../../../State/State";
import { useTranslation } from "react-i18next";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";

const Button = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    const { t } = useTranslation();

    return (
        <div>
            <button className={style.button} type="submit" onClick={(e) => e.preventDefault()}> تغییر رمز عبور</button>
        </div>
    )
}

export { Button }
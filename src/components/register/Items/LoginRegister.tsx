import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import styleLogin from "../../../Style/list.module.css";
import { useGlobalState } from "../../../State/State";

const LoginRegister = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (

    <div className={styleLogin.RegisterLoginButton}>
      <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"} className="red text-black text-sm font-DannaExtraBold ">{t("haveAccount")}</h1>
      <NavLink className="border-none cursor-pointer text-blue-700 text-sm font-DannaBold tracking-tight underline" to="/Auth/Login"> {t("loginAccount")}</NavLink>
    </div>
  )
}

export { LoginRegister }
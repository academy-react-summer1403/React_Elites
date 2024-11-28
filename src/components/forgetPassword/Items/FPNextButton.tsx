import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import styleLogin from "../../../Style/list.module.css";
import { useGlobalState } from "../../../State/State";

const FPNextButton = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <NavLink data-theme={darkMode ? "darkSmall" : "lightMode"} to="/Auth/Forget-Password-Page2" className={styleLogin.LoginAccount}>
      <button data-theme={darkMode ? "darkNoBG" : "lightMode"} className="h-full w-full text-white bg-blue-600 text-lg leading-4 font-lg font-DannaBold uppercase tracking-wider cursor-pointer rounded-full overflow-hidden" type="submit">{t("sendLink")}</button>
    </NavLink>
  )
}

export { FPNextButton }
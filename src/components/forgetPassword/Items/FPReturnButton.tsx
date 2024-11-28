import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import styleLogin from "../../../Style/list.module.css";
import { useGlobalState } from "../../../State/State";

const FPReturnButton = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div  className={styleLogin.returnHolder}>
      <div data-theme={darkMode ? "darkSmall" : "lightMode"} className={styleLogin.return}>
        <NavLink data-theme={darkMode ? "darkNoBG" : "lightMode"} to="/Auth/Login"> {t("return")} &gt;</NavLink>
      </div>
    </div>
  )
}

export { FPReturnButton }
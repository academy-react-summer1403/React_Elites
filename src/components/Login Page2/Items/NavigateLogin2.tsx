import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useGlobalState } from "../../../State/State";

const NavigateLogin2 = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (

    <div className={styleLogin.navigate}>
      <div className={styleLogin.lastSelect}>
        <div className={styleLogin.lastNavigate}>  </div>
        <h1 data-theme={darkMode ? "darkNoBGDisc" : "lightMode"}>{t("enterPhoneNumber")} </h1>
      </div>
      <div className={styleLogin.select}>
        <div>  </div>
        <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("confirmCodeTitle")} </h1>
        <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("confirmCodeDesc")} </h1>
      </div>
    </div>

  )
}

export { NavigateLogin2 }
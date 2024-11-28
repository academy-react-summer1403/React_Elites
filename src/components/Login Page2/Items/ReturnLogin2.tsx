import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useGlobalState } from "../../../State/State";

const ReturnLogin2 = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (

    <div className={styleLogin.returnHolder}>
      <div  data-theme={darkMode ? "darkSmall" : "lightMode"} className={styleLogin.return}>
        <NavLink  data-theme={darkMode ? "darkNoBG" : "lightMode"} to="/Auth/Login"> {t("return")} &gt;</NavLink>
      </div>
    </div>

  )
}

export { ReturnLogin2 }
import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useGlobalState } from "../../../State/State";
import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const ReturnLogin2 = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (

    <div className={styleLogin.returnHolder}>
      <div  data-theme={identifier("darkSmall")} className={styleLogin.return}>
        <NavLink  data-theme={identifier("darkNoBG")} to="/Auth/Login"> {t("return")} &gt;</NavLink>
      </div>
    </div>

  )
}

export { ReturnLogin2 }
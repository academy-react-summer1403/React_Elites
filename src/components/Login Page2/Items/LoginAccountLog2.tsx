import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useGlobalState } from "../../../State/State";
import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const LoginAccountLog2 = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (

    <div  data-theme={identifier("darkSmall")} className={styleLogin.LoginAccount}>
      <button  type="submit">{t("loginAccount")} </button>
    </div>

  )
}

export { LoginAccountLog2 }
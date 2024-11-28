import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useGlobalState } from "../../../State/State";

const LoginAccountLog2 = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (

    <NavLink  data-theme={darkMode ? "darkSmall" : "lightMode"} to="/" className={styleLogin.LoginAccount}>
      <button  type="submit">{t("loginAccount")} </button>
    </NavLink>

  )
}

export { LoginAccountLog2 }
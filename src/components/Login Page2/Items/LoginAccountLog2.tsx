import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const LoginAccountLog2 = () => {
  const { t } = useTranslation();
  return (

    <NavLink to="/" className={styleLogin.LoginAccount}>
      <button  type="submit">{t("loginAccount")} </button>
    </NavLink>

  )
}

export { LoginAccountLog2 }
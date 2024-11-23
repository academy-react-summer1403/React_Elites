import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const ReturnLogin2 = () => {
  const { t } = useTranslation();
  return (

    <div className={styleLogin.returnHolder}>
      <div className={styleLogin.return}>
        <NavLink to="/Auth/Login"> {t("return")} &gt;</NavLink>
      </div>
    </div>

  )
}

export { ReturnLogin2 }
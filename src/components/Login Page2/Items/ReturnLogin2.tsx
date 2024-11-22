import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const ReturnLogin2 = () => {
  const { t } = useTranslation();
  return (

    <div className="flex   justify-center mt-4">
      <div className={styleLogin.return}>
        <NavLink to="/Auth/Login" className="border-non cursor-pointer text-blue-700 text-sm font-DannaMedium tracking-tight"> {t("return")} &gt;</NavLink>
      </div>
    </div>

  )
}

export { ReturnLogin2 }
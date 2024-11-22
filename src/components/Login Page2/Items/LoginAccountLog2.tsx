import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const LoginAccountLog2 = () => {
  const { t } = useTranslation();
  return (

    <NavLink to="/" className="h-11  overflow-hidden flex">
      <button className="h-full w-full text-white bg-blue-600 text-lg leading-4 font-lg font-DannaBold uppercase tracking-wider cursor-pointer rounded-full overflow-hidden" type="submit">{t("loginAccount")} </button>
    </NavLink>

  )
}

export { LoginAccountLog2 }
import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const NavigateLogin2 = () => {
  const { t } = useTranslation();
  return (

    <div className={styleLogin.navigate}>
      <div className={styleLogin.lastSelect}>
        <div className={styleLogin.lastNavigate}>  </div>
        <h1>{t("enterPhoneNumber")} </h1>
      </div>
      <div className={styleLogin.select}>
        <div>  </div>
        <h1>{t("confirmCodeTitle")} </h1>
        <h1>{t("confirmCodeDesc")} </h1>
      </div>
    </div>

  )
}

export { NavigateLogin2 }
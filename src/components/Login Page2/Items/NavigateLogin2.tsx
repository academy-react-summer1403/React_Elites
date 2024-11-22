import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const NavigateLogin2 = () => {
  const { t } = useTranslation();
  return (

    <div className={styleLogin.navigate}>
      <div className="w-72 flex flex-wrap h-full">
        <div className={styleLogin.lastNavigate}>  </div>
        <h1 className="w-full align-right text-gray-400 text-base font-DannaMedium tracking-tight mt-3">{t("enterPhoneNumber")} </h1>
      </div>
      <div className="w-72 h-full flex flex-wrap">
        <div className="w-full h-2 rounded-lg bg-blue-500">  </div>
        <h1 className="w-full items-right text-black text-base font-DannaMedium tracking-tight mt-3">{t("confirmCodeTitle")} </h1>
        <h1 className="w-full items-right text-black text-sm font-DannaMedium tracking-tight">{t("confirmCodeDesc")} </h1>
      </div>
    </div>

  )
}

export { NavigateLogin2 }
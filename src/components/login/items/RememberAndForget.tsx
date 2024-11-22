import styleLogin from "../../../Style/list.module.css";
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { NavLink } from "react-router-dom";


const RememberAndForget = () => {
  const { t } = useTranslation();


  return (

    <div className="h-full max-w-96 flex justify-between my-4 mx-0 text-right">
      <div className="flex items-center gap-1.5">
        <label htmlFor="rememberPassInput" className="text-base font-DannaDemiBold text-black text-left ">{t("rememberMe")}</label>
        <Field id="rememberPassInput" type="checkbox" className="items-right rounded w-4 text-right text-black :" name="rememberPass" />
      </div>
      <NavLink to="/Auth/Forget-Password" className="border-none bg-slate-100 px-4 py-2 rounded-full cursor-pointer text-blue-700 text-xs font-DannaBold tracking-tight"> {t("forgetPassword")}</NavLink>
      <ErrorMessage name="rememberPass" component={"p"} className="error" />
    </div>

  )
}

export { RememberAndForget }
import styleLogin from "./../../../Style/list.module.css";
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from "formik";


const Input2login = () => {
  const { t } = useTranslation();


  return (

    <div className={styleLogin.inputHolder}>
      <label className="text-base font-DannaDemiBold text-black pb-1.5">{t("password")}</label>
      <Field type='password' className={`${styleLogin.input} ${styleLogin.inputPassword}`} name="password" placeholder={t("enterPasswordPlaceHolder")} />
      <ErrorMessage name="password" component={"p"} className="error" />
    </div>

  )
}

export { Input2login }
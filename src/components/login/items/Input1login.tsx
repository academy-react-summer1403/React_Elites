import styleLogin from "./../../../Style/list.module.css";
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from "formik";

const Input1Login = () => {
  const { t } = useTranslation();


  return (

    <div className={styleLogin.inputHolder}>
      <label className="text-base font-DannaDemiBold text-black pb-3">{t("EmailOrPhoneNumber")} </label>
      <Field className={styleLogin.input} name="phoneOrGmail" placeholder={t("enterNumber&email")} />
      <ErrorMessage name="phoneOrGmail" component={"p"} className="error" />
    </div>

  )
}

export { Input1Login }
import { Field, ErrorMessage } from "formik";
import { useTranslation } from 'react-i18next';
import styleLogin from "../../../Style/list.module.css";

const FPEmailInput = () => {
  const { t } = useTranslation();
  return (
    <div className={styleLogin.inputHolder}>
      <label className="text-base font-DannaBold text-black pb-1.5">{t("email")}</label>
      <Field className={styleLogin.input} name="password" placeholder={t("enterEmailReg")} />
      <ErrorMessage name="password" component={"p"} className="error" />
    </div>
  )
}

export { FPEmailInput }
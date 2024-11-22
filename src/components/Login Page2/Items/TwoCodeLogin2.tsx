import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const TwoCodeLogin2 = () => {
  const { t } = useTranslation();
  return (

    <div className="h-full max-w-96  my-4 mx-0 text-right">
      <label className="text-base font-DannaDemiBold text-black pb-1.5">{t("TwoCode")} </label>
      <Field className={styleLogin.input} name="forgetPassPage2" placeholder="کد دو مرحله‌ای خود را وارد کنید" />
      <ErrorMessage name="password" component={"p"} className="error" />
    </div>

  )
}

export { TwoCodeLogin2 }
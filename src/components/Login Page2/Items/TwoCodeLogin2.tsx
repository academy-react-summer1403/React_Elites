import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const TwoCodeLogin2 = ({setverifyCode}) => {
  const { t } = useTranslation();

  return (

    <div className={styleLogin.inputHolder}>
      <label data-theme={identifier("darkNoBG")} className="text-base font-DannaDemiBold text-black pb-1.5">{t("TwoCode")} </label>
      <Field data-theme={identifier("darkSmall")} className={styleLogin.input} name="forgetPassPage2" placeholder="کد دو مرحله‌ای خود را وارد کنید" onChange={(e) => setverifyCode(e.target.value)} />
      <ErrorMessage name="password" component={"p"} className="error" />
    </div>

  )
}

export { TwoCodeLogin2 }
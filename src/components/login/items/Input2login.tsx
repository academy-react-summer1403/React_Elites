import styleLogin from "./../../../Style/list.module.css";
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useGlobalState } from "../../../State/State";
import { useState } from "react";
import { identifier } from "../../../core/services/Functions/ThemeIdentifier";

const Input2login = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const [isPass, setisPass] = useState(false)

  return (

    <div className={styleLogin.inputHolder}>
      <label data-theme={identifier("darkNoBG")} className="text-base font-DannaDemiBold text-black pb-1.5">{t("password")}</label>
      <div className={styleLogin.inputPasswordHolder}>
        <Field type={isPass ? "password" : "text"} data-theme={identifier("darkSmall")} className={styleLogin.input} name="password" placeholder={t("enterPasswordPlaceHolder")} />
        <div className={isPass ? styleLogin.inputPasswordC : styleLogin.inputPassword} onClick={() => setisPass(!isPass)}></div>
      </div>
      <ErrorMessage name="password" component={"p"} className="error" />
    </div>

  )
}

export { Input2login }
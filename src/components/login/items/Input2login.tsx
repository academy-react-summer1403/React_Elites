import styleLogin from "./../../../Style/list.module.css";
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useGlobalState } from "../../../State/State";


const Input2login = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (

    <div className={styleLogin.inputHolder}>
      <label data-theme={darkMode ? "darkNoBG" : "lightMode"} className="text-base font-DannaDemiBold text-black pb-1.5">{t("password")}</label>
      <div className={styleLogin.inputPasswordHolder}>
        <Field type='password' data-theme={darkMode ? "darkSmall" : "lightMode"} className={styleLogin.input} name="password" placeholder={t("enterPasswordPlaceHolder")} />
        <div className={styleLogin.inputPassword}></div>
      </div>
      <ErrorMessage name="password" component={"p"} className="error" />
    </div>

  )
}

export { Input2login }
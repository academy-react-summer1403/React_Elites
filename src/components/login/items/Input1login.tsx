import styleLogin from "./../../../Style/list.module.css";
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useGlobalState } from "../../../State/State";

const Input1Login = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (

    <div className={styleLogin.inputHolder}>
      <label data-theme={darkMode ? "darkNoBG" : "lightMode"} className="text-base font-DannaDemiBold text-black pb-3">{t("EmailOrPhoneNumber")} </label>
      <Field data-theme={darkMode ? "darkSmall" : "lightMode"} className={styleLogin.input} name="phoneOrGmail" placeholder={t("enterNumber&email")} />
      <ErrorMessage name="phoneOrGmail" component={"p"} className="error" />
    </div>

  )
}

export { Input1Login }
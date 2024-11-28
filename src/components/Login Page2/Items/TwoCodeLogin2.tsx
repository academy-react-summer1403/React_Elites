import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useGlobalState } from "../../../State/State";

const TwoCodeLogin2 = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (

    <div className={styleLogin.inputHolder}>
      <label data-theme={darkMode ? "darkNoBG" : "lightMode"} className="text-base font-DannaDemiBold text-black pb-1.5">{t("TwoCode")} </label>
      <Field data-theme={darkMode ? "darkSmall" : "lightMode"} className={styleLogin.input} name="forgetPassPage2" placeholder="کد دو مرحله‌ای خود را وارد کنید" />
      <ErrorMessage name="password" component={"p"} className="error" />
    </div>

  )
}

export { TwoCodeLogin2 }
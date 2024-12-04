import { Field, ErrorMessage } from "formik";
import { useTranslation } from 'react-i18next';
import styleLogin from "../../../Style/list.module.css";
import { useGlobalState } from "../../../State/State";

const FPEmailInput = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={styleLogin.inputHolder}>
      <label data-theme={darkMode ? "darkNoBG" : "lightMode"} className="text-base font-DannaBold text-black pb-1.5">{t("email")}</label>
      <Field data-theme={darkMode ? "darkSmall" : "lightMode"} className={styleLogin.input} name="email" placeholder={t("enterEmailReg")} />
      <ErrorMessage name="email" component={"p"} className="error" />
    </div>
  )
}

export { FPEmailInput }
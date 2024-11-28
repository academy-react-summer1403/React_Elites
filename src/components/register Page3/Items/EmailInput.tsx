import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { useGlobalState } from "../../../State/State";

const EmailInput = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (

    <div className={styleLogin.inputHolder}>
      <label data-theme={darkMode ? "darkNoBG" : "lightMode"} className="text-base font-DannaBold text-black pb-3">ایمیل </label>
      <Field data-theme={darkMode ? "darkSmall" : "lightMode"} className={styleLogin.input} name="gmail" placeholder="ایمیل خود را وارد کنید" />
      <ErrorMessage name="adress" component={"p"} className="error" />
    </div>
  )
}

export { EmailInput }
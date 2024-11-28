import { ErrorMessage, Field } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { useGlobalState } from "../../../State/State";

const ConfirmCode = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (

    <div className={styleLogin.inputHolder}>
      <label data-theme={darkMode ? "darkNoBG" : "lightMode"} className="text-base font-DannaBold text-black pb-3">کد تایید </label>
      <Field data-theme={darkMode ? "darkSmall" : "lightMode"} className={styleLogin.input} name="verifyCode" placeholder="کد تایید خود را وارد کنید" />
      <ErrorMessage name="verifyCode" component={"p"} className="error" />
    </div>

  )
}

export { ConfirmCode }
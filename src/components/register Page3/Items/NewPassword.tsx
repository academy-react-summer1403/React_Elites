import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { useGlobalState } from "../../../State/State";
import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const NewPassword = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (

    <div className={styleLogin.inputHolder}>
      <label data-theme={identifier("darkNoBG")} className="text-base font-DannaBold text-black pb-3">رمزعبور جدید </label>
      <Field data-theme={identifier("darkSmall")} className={styleLogin.input} name="password" placeholder="رمزعبور جدید خود را وارد کنید" />
      <ErrorMessage name="adress" component={"p"} className="error" />
    </div>
  )
}

export { NewPassword }
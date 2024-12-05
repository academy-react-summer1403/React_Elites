import { Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { useGlobalState } from "../../../State/State";
import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const FPRepeatPassInput = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={styleLogin.inputHolder}>
      <label data-theme={identifier("darkNoBG")} className="text-base font-DannaBold text-black pb-1.5">تکرار رمزعبور جدید</label>
      <Field data-theme={identifier("darkSmall")} className={styleLogin.input} name="newPassword" placeholder="تکرار رمزعبور خود را وارد کنید" />
      <ErrorMessage name="password" component={"p"} className="error" />
    </div>
  )
}

export { FPRepeatPassInput }
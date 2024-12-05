import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { useGlobalState } from "../../../State/State";
import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const Confirm = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (

    <div className={styleLogin.buttonHolder}>
      <button data-theme={identifier("darkSmall")} className={styleLogin.button} type="submit">تایید </button>
    </div>
  )
}

export { Confirm }
import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { useGlobalState } from "../../../State/State";

const Confirm = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (

    <div className={styleLogin.buttonHolder}>
      <button data-theme={darkMode ? "darkSmall" : "lightMode"} className={styleLogin.button} type="submit">تایید </button>
    </div>
  )
}

export { Confirm }
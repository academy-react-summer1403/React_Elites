import { ErrorMessage, Field } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { useGlobalState } from "../../../State/State";

const Confirm = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (

    <div data-theme={darkMode ? "darkSmall" : "lightMode"} className={styleLogin.divRegister}>
      <button data-theme={darkMode ? "darkNoBG" : "lightMode"} className={styleLogin.button} type="submit">تایید</button>
    </div>

  )
}

export { Confirm }
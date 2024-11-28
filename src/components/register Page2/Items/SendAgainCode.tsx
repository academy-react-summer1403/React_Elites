import { ErrorMessage, Field } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { useGlobalState } from "../../../State/State";

const SendAgainCode = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (

    <div className={styleLogin.sendAgain}>
      <button data-theme={darkMode ? "darkSmall" : "lightMode"} className={styleLogin.sendAgainButton} type="submit">ارسال مجدد کد تایید 01:00</button>
    </div>

  )
}

export { SendAgainCode }
import { ErrorMessage, Field } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { useGlobalState } from "../../../State/State";

const ReturnReg = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (

    <div className={styleLogin.divRegister}>
      <div data-theme={darkMode ? "darkSmall" : "lightMode"} className={styleLogin.HomePageButton}>
        <NavLink data-theme={darkMode ? "darkNoBG" : "lightMode"} to="/Auth/Forget-Password" className="border-non cursor-pointer text-blue-700 text-sm font-DannaMedium tracking-tight"> بازگشت &gt;</NavLink>
      </div>
    </div>

  )
}

export { ReturnReg }
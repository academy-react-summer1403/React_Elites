import { NavLink } from "react-router-dom";
import styleLogin from "../../../Style/list.module.css";
import { useGlobalState } from "../../../State/State";

const FPReturnButton = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={styleLogin.returnHolder}>
      <div data-theme={darkMode ? "darkSmall" : "lightMode"} className={styleLogin.return}>
        <NavLink data-theme={darkMode ? "darkNoBG" : "lightMode"} to="/Auth/Forget-Password"> بازگشت &gt; </NavLink>
      </div>
    </div>
  )
}

export { FPReturnButton }
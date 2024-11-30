import { NavLink } from "react-router-dom";
import styleLogin from "../../../Style/list.module.css";
import { useGlobalState } from "../../../State/State";

const FPNextButton = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div data-theme={darkMode ? "darkSmall" : "lightMode"} to="/" className={styleLogin.LoginAccount}>
      <button data-theme={darkMode ? "darkNoBG" : "lightMode"} className="h-full w-full text-white bg-blue-600 text-lg leading-4 font-lg font-DannaBold uppercase tracking-wider cursor-pointer rounded-full overflow-hidden" type="submit">تایید رمزعبور</button>
    </div>
  )
}

export { FPNextButton }
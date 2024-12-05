import { NavLink } from "react-router-dom";
import styleLogin from "../../../Style/list.module.css";
import { useGlobalState } from "../../../State/State";
import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const FPNextButton = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div data-theme={identifier("darkSmall")} to="/" className={styleLogin.LoginAccount}>
      <button data-theme={identifier("darkNoBG")} className="h-full w-full text-white bg-blue-600 text-lg leading-4 font-lg font-DannaBold uppercase tracking-wider cursor-pointer rounded-full overflow-hidden" type="submit">تایید رمزعبور</button>
    </div>
  )
}

export { FPNextButton }
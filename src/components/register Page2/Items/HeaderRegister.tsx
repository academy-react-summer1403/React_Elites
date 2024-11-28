import { useGlobalState } from "../../../State/State";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";

const HeaderRegister = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (

    <div className={styleLogin.HeaderLogin}>
      <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"} className="text-black text-2xl font-DannaBold m-4">تایید کد ارسال شده </h1>
      <p data-theme={darkMode ? "darkNoBGDisc" : "lightMode"} className="text-gray-400 text-sm font-DannaDemiBoldiBoldiBold">لطفا کد ارسال شده به شماره همراه 09381235486 را وارد کنید</p>
    </div>

  )
}

export { HeaderRegister }
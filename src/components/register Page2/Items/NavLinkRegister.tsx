import { useGlobalState } from "../../../State/State";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";

const NavLinkRegister = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (

    <div className={`${styleLogin.navigate} ${styleLogin.navigateRegister}`}>
      <div className={styleLogin.lastSelect}>
        <div>  </div>
        <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"} className={styleLogin.textNavigate}>وارد کردن شماره تلفن </h1>
      </div>
      <div className={styleLogin.select}>
        <div>  </div>
        <h1 data-theme={darkMode ? "darkNoBGDisc" : "lightMode"} className={`${styleLogin.textNavigate} ${styleLogin.selectedNavigate}`}>تایید کد ارسال شده </h1>
      </div>
      <div>
        <div>  </div>
        <h1 data-theme={darkMode ? "darkNoBGDisc" : "lightMode"} className={styleLogin.textNavigate}>واردکردن اطلاعات شخصی </h1>
      </div>
    </div>

  )
}

export { NavLinkRegister }
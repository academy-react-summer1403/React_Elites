import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { useGlobalState } from "../../../State/State";

const NavigateRegister = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (

    <div className={`${styleLogin.navigate} ${styleLogin.navigateRegister}`}>
      <div className={styleLogin.lastSelect}>
        <div className="w-full h-2 rounded-lg black bg-blue-500 opacity-500">  </div>
        <h1 data-theme={darkMode ? "darkNoBGDisc" : "lightMode"} className={styleLogin.textNavigate}>وارد کردن شماره تلفن </h1>
      </div>
      <div className={styleLogin.lastSelect}>
        <div className="w-full h-2 rounded-lg black bg-blue-500">  </div>
        <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"} className={styleLogin.textNavigate}>تایید کد ارسال شده </h1>
      </div>
      <div className={styleLogin.select}>
        <div className="w-full h-2 rounded-lg black bg-blue-600">  </div>
        <h1 data-theme={darkMode ? "darkNoBGDisc" : "lightMode"} className={`${styleLogin.textNavigate} ${styleLogin.selectedNavigate}`}>واردکردن اطلاعات شخصی </h1>
      </div>
    </div>
  )
}

export { NavigateRegister }
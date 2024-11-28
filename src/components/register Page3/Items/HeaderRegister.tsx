import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { useGlobalState } from "../../../State/State";

const HeaderRegister = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (

    <div className={styleLogin.HeaderLogin}>
      <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"} className="text-black text-2xl font-DannaBold m-4">وارد کردن اطلاعات شخصی </h1>
      <p data-theme={darkMode ? "darkNoBGDisc" : "lightMode"} className="text-gray-400 text-sm font-DannaDemiBold">لطفا اطلاعات اولیه خواسته شده را وارد کنید</p>
    </div>
  )
}

export { HeaderRegister }
import { ErrorMessage, Field } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";

import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const ReturnReg = () => {


  return (

    <div className={styleLogin.divRegister}>
      <div data-theme={identifier("darkSmall","dark2Small")} className={styleLogin.HomePageButton}>
        <NavLink data-theme={identifier("darkNoBG","dark2NoBG")} to="/Auth/Forget-Password" className="border-non cursor-pointer text-blue-700 text-sm font-DannaMedium tracking-tight"> بازگشت &gt;</NavLink>
      </div>
    </div>

  )
}

export { ReturnReg }
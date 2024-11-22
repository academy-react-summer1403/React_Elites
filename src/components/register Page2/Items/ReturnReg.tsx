import { ErrorMessage, Field } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";

const ReturnReg = () => {

  return (

    <div className={styleLogin.divRegister}>
      <div className={styleLogin.HomePageButton}>
        <NavLink to="/Auth/Forget-Password" className="border-non cursor-pointer text-blue-700 text-sm font-DannaMedium tracking-tight"> بازگشت &gt;</NavLink>
      </div>
    </div>

  )
}

export { ReturnReg }
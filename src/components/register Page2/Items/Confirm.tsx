import { ErrorMessage, Field } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";

import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const Confirm = () => {


  return (

    <div data-theme={identifier("darkSmall")} className={styleLogin.divRegister}>
      <button data-theme={identifier("darkNoBG")} className={styleLogin.button} type="submit">تایید</button>
    </div>

  )
}

export { Confirm }
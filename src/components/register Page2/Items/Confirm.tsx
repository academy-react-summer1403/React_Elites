import { ErrorMessage, Field } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";

import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const Confirm = () => {


  return (

    <div data-theme={identifier("darkSmall","dark2Small")} className={styleLogin.divRegister}>
      <button data-theme={identifier("darkNoBG","dark2NoBG")} className={styleLogin.button} type="submit">تایید</button>
    </div>

  )
}

export { Confirm }
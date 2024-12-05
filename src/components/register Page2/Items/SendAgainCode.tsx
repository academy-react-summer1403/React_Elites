import { ErrorMessage, Field } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";

import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const SendAgainCode = () => {


  return (

    <div className={styleLogin.sendAgain}>
      <button data-theme={identifier("darkSmall")} className={styleLogin.sendAgainButton} type="submit">ارسال مجدد کد تایید 01:00</button>
    </div>

  )
}

export { SendAgainCode }
import { ErrorMessage, Field } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";

const SendAgainCode = () => {

  return (

    <div className={styleLogin.sendAgain}>
      <button className={styleLogin.sendAgainButton} type="submit">ارسال مجدد کد تایید 01:00</button>
    </div>

  )
}

export { SendAgainCode }
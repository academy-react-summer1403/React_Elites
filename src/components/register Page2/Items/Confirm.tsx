import { ErrorMessage, Field } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";

const Confirm = () => {

  return (

    <div className={styleLogin.divRegister}>
      <button className={styleLogin.button} type="submit">تایید</button>
    </div>

  )
}

export { Confirm }
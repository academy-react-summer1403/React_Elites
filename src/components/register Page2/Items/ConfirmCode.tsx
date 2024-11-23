import { ErrorMessage, Field } from "formik";
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";

const ConfirmCode = () => {

  return (

    <div className={styleLogin.inputHolder}>
      <label className="text-base font-DannaBold text-black pb-3">کد تایید </label>
      <Field className={styleLogin.input} name="verifyCode" placeholder="کد تایید خود را وارد کنید" />
      <ErrorMessage name="verifyCode" component={"p"} className="error" />
    </div>

  )
}

export { ConfirmCode }
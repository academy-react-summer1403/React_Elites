import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";

const NewPassword = () => {
  return (

    <div className={styleLogin.inputHolder}>
      <label className="text-base font-DannaBold text-black pb-3">رمزعبور جدید </label>
      <Field className={styleLogin.input} name="password" placeholder="رمزعبور جدید خود را وارد کنید" />
      <ErrorMessage name="adress" component={"p"} className="error" />
    </div>
  )
}

export { NewPassword }
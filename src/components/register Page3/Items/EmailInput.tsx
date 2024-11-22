import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";

const EmailInput = () => {
  return (

    <div className="h-full max-w-96 mx-0 text-right">
      <label className="text-base font-DannaBold text-black pb-3">ایمیل </label>
      <Field className={styleLogin.input} name="gmail" placeholder="ایمیل خود را وارد کنید" />
      <ErrorMessage name="adress" component={"p"} className="error" />
    </div>
  )
}

export { EmailInput }
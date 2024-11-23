import { Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";

const FPNewPassInput = () => {
  return (
    <div className={styleLogin.inputHolder}>
      <label className="text-base font-DannaBold text-black pb-1.5"> رمزعبور جدید</label>
      <Field className={styleLogin.input} name="password" placeholder="رمزعبور خود را وارد کنید" />
      <ErrorMessage name="password" component={"p"} className="error" />
    </div>
  )
}

export { FPNewPassInput }
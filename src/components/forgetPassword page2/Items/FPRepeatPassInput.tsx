import { Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";

const FPRepeatPassInput = () => {
  return (
    <div className={styleLogin.inputHolder}>
      <label className="text-base font-DannaBold text-black pb-1.5">تکرار رمزعبور جدید</label>
      <Field className={styleLogin.input} name="password" placeholder="تکرار رمزعبور خود را وارد کنید" />
      <ErrorMessage name="password" component={"p"} className="error" />
    </div>
  )
}

export { FPRepeatPassInput }
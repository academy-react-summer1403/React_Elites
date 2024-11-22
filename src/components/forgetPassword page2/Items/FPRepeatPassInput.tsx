import { Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";

const FPRepeatPassInput = () => {
  return (
    <div className="h-full max-w-96  my-4 mx-0 text-right">
      <label className="text-base font-DannaBold text-black pb-1.5">رمزعبور جدید</label>
      <Field className={styleLogin.input} name="password" placeholder="رمزعبور خود را وارد کنید" />
      <ErrorMessage name="password" component={"p"} className="error" />
    </div>
  )
}

export { FPRepeatPassInput }
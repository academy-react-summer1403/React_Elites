import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../../Style/list.module.css";

const Confirm = () => {
  return (

    <div className={styleLogin.buttonHolder}>
      <button className={styleLogin.button} type="submit">تایید </button>
    </div>
  )
}

export { Confirm }
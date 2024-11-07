import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../Style/list.module.css";
import { ForgetPassNavigate } from "./Items/FPNavigate";
import { FPTitleHeader } from "./Items/FPTitleHeader";
import { FPEmailInput } from "./Items/FPEmailInput";
import { FPNextButton } from "./Items/FPNextButton";
import { FPReturnButton } from "./Items/FPReturnButton";

const ForgetPass = () => {
  return (
    <Formik>
      {(form) => (
        <Form className={styleLogin.form}>
          <ForgetPassNavigate />
          <FPTitleHeader />
          <FPEmailInput />
          <FPNextButton />
          <FPReturnButton />
        </Form>
      )}
    </Formik>

  )
}

export { ForgetPass }
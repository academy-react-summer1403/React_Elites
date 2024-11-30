import { Formik, Form, Field, ErrorMessage } from "formik";
import styleLogin from "../../Style/list.module.css";
import { ForgetPassNavigate } from "./Items/FPNavigate";
import { FPTitleHeader } from "./Items/FPTitleHeader";
import { FPEmailInput } from "./Items/FPEmailInput";
import { FPNextButton } from "./Items/FPNextButton";
import { FPReturnButton } from "./Items/FPReturnButton";
import { postForgetPassEmail } from "../../core/services/api/postForgetPassEmail";
import toast, { Toaster } from "react-hot-toast";

const ForgetPass = () => {
  return (
    <>
      <Toaster />
      <Formik initialValues={{
      email: "",
      baseUrl: "http://localhost:5173/Auth/Forget-Password-Page2"
    }} onSubmit={async(values) => {
      let res = await postForgetPassEmail(values)
      if(res.success === true){
        toast.success("لینک به ایمیل شما فرستاده شد")
      }
    }}>
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
    </>


  )
}

export { ForgetPass }
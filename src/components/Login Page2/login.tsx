import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from 'react'
import styleLogin from "../../Style/list.module.css";
import { Navigate, NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { NavigateLogin2 } from './Items/NavigateLogin2';
import { HeaderLogin2 } from './Items/HeaderLogin2';
import { TwoCodeLogin2 } from './Items/TwoCodeLogin2';
import { LoginAccountLog2 } from './Items/LoginAccountLog2';
import { ReturnLogin2 } from './Items/ReturnLogin2';
import { useGlobalState } from "../../State/State";
import { postVerify } from "../../core/services/api/post-verify-code";
import toast, { Toaster } from "react-hot-toast";
import { setItem } from "../../core/services/storage/storage.services";

const LoginPage2 = () => {
  const { t } = useTranslation();
  const [userGmail, setuserGmail] = useGlobalState('userGmail');
  const [userPass, setuserPass] = useGlobalState('userPass');
  const [isLogin, setIsLogin] = useGlobalState('isLogin');
  const [verifyCode, setverifyCode] = useState('')

  const postVerifyCode = async (values) => {
    let res = await postVerify(verifyCode, values)
    if(res.success === true){
      toast.success("لوگین انجام شد")
      setItem("token", res.token)
      setIsLogin(true)
    }
  }

  return (

    <Formik 
      initialValues={{ phoneOrGmail: userGmail, password: userPass, rememberPass: true }}
      onSubmit={(values) => postVerifyCode(values)}
    >
      {(form) => (
        <Form className={styleLogin.form}>
          {isLogin && <Navigate to="/" />}
          <Toaster />
          <NavigateLogin2 />
          <HeaderLogin2 />
          <TwoCodeLogin2 setverifyCode={setverifyCode} />
          <LoginAccountLog2 />
          <ReturnLogin2 />
        </Form>
      )}
    </Formik>

  )
}

export { LoginPage2 }
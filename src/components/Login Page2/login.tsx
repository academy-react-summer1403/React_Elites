import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from 'react'
import styleLogin from "../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { NavigateLogin2 } from './Items/NavigateLogin2';
import { HeaderLogin2 } from './Items/HeaderLogin2';
import { TwoCodeLogin2 } from './Items/TwoCodeLogin2';
import { LoginAccountLog2 } from './Items/LoginAccountLog2';
import { ReturnLogin2 } from './Items/ReturnLogin2';

const LoginPage2 = () => {
  const { t } = useTranslation();
  return (

    <Formik initialValues={{ password: "", address: "", rememberPass: "" }}>
      {(form) => (
        <Form className={styleLogin.form}>
          <NavigateLogin2 />
          <HeaderLogin2 />
          <TwoCodeLogin2 />
          <LoginAccountLog2 />
          <ReturnLogin2 />
        </Form>
      )}
    </Formik>

  )
}

export { LoginPage2 }
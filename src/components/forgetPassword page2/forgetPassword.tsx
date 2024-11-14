import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from 'react'
import styleLogin from "../../Style/list.module.css";
import { FPNavigate } from "./Items/FPNavigate";
import { FPTitleHeader } from "./Items/FPTitleHeader";
import { FPNewPassInput } from "./Items/FPNewPassInput";
import { FPRepeatPassInput } from "./Items/FPRepeatPassInput";
import { FPNextButton } from "./Items/FPNextButton";
import { FPReturnButton } from "./Items/FPReturnButton";
import { NavLink } from "react-router-dom";

const ForgetPassPage2 = () => {

  return (

    <Formik initialValues={{ password: "", address: "", rememberPass: "" }}>
      {(form) => (
        <Form className={styleLogin.form}>
          <FPNavigate />
          <FPTitleHeader />
          <FPNewPassInput />
          <FPRepeatPassInput />
          <FPNextButton />
          <FPReturnButton />
        </Form>
      )}
    </Formik>

  )
}

export { ForgetPassPage2 }
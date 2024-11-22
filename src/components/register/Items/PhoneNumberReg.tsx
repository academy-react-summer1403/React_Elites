import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from 'react'
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { useGlobalState } from "../../../State/State";
import { useTranslation } from 'react-i18next';

const PhoneNumberReg = () => {
  const { t } = useTranslation();

  return (

    <div className="h-full mt-8 max-w-96 mx-0 text-right">
      <label className="text-base font-DannaBold text-black pb-3"> {t("PhoneNumberReg")}</label>
      <Field className={styleLogin.input} name="phoneNumber" placeholder={t("enterNumberReg")} />
      <ErrorMessage name="phoneNumber" component={"p"} className="error" />
    </div>


  )
}

export { PhoneNumberReg }
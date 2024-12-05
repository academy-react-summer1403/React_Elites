import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from 'react'
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";

import { useTranslation } from 'react-i18next';
import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const PhoneNumberReg = () => {
  const { t } = useTranslation();


  return (

    <div className={styleLogin.inputHolder}>
      <label data-theme={identifier("darkNoBG")} className="text-base font-DannaBold text-black pb-3"> {t("PhoneNumberReg")}</label>
      <Field data-theme={identifier("darkSmall")} className={styleLogin.input} name="phoneNumber" placeholder={t("enterNumberReg")} />
      <ErrorMessage name="phoneNumber" component={"p"} className="error" />
    </div>


  )
}

export { PhoneNumberReg }
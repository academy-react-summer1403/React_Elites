import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from 'react'
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";

import { useTranslation } from 'react-i18next';
import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const SendCode = () => {
  const { t } = useTranslation();


  return (

    <div data-theme={identifier("darkSmall","dark2Small")} className={styleLogin.LoginAccount}>
      <button data-theme={identifier("darkNoBG","dark2NoBG")}  type="submit">{t("sendCodeRegister")}</button>
    </div>

  )
}

export { SendCode }
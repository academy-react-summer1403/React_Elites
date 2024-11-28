import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from 'react'
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { useGlobalState } from "../../../State/State";
import { useTranslation } from 'react-i18next';

const SendCode = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (

    <div data-theme={darkMode ? "darkSmall" : "lightMode"} className={styleLogin.LoginAccount}>
      <button data-theme={darkMode ? "darkNoBG" : "lightMode"}  type="submit">{t("sendCodeRegister")}</button>
    </div>

  )
}

export { SendCode }
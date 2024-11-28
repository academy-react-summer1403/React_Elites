import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from 'react'
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { useGlobalState } from "../../../State/State";
import { useTranslation } from 'react-i18next';

const NavigateRegister = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (

    <div className={`${styleLogin.navigate} ${styleLogin.navigateRegister}`}>
      <div className={styleLogin.select}>
        <div>  </div>
        <h1 data-theme={darkMode ? "darkNoBG" : "lightMode"} className={`${styleLogin.textNavigate} ${styleLogin.selectedNavigate}`}>{t("enterPhoneNumberReg")} </h1>
      </div>
      <div>
        <div>  </div>
        <h1  data-theme={darkMode ? "darkNoBGDisc" : "lightMode"} className={styleLogin.textNavigate}>{t("confirmCodeRegister")} </h1>
      </div>
      <div>
        <div>  </div>
        <h1 data-theme={darkMode ? "darkNoBGDisc" : "lightMode"} className={styleLogin.textNavigate}>{t("enterInformationRegister")} </h1>
      </div>
    </div>


  )
}

export { NavigateRegister }
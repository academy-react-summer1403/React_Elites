import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from 'react'
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { useGlobalState } from "../../../State/State";
import { useTranslation } from 'react-i18next';

const NavigateRegister = () => {
  const { t } = useTranslation();

  return (

    <div className={`${styleLogin.navigate} ${styleLogin.navigateRegister}`}>
      <div className="flex flex-wrap h-full bg-blue w-60">
        <div className="w-full h-2 rounded-lg black bg-blue-600">  </div>
        <h1 className={`${styleLogin.textNavigate} ${styleLogin.selectedNavigate}`}>{t("enterPhoneNumberReg")} </h1>
      </div>
      <div className="flex flex-wrap h-full w-60 bg-blue">
        <div className="w-full h-2 rounded-lg black bg-gray-400">  </div>
        <h1 className={styleLogin.textNavigate}>{t("confirmCodeRegister")} </h1>
      </div>
      <div className="flex flex-wrap h-full w-60 bg-blue">
        <div className="w-full h-2 rounded-lg black bg-gray-400">  </div>
        <h1 className={styleLogin.textNavigate}>{t("enterInformationRegister")} </h1>
      </div>
    </div>


  )
}

export { NavigateRegister }
import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from 'react'
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { useGlobalState } from "../../../State/State";
import { useTranslation } from 'react-i18next';

const WelcomeRegister = () => {
  const { t } = useTranslation();

  return (

    <div className="h-full max-w-96 mb-8 mt-20">
      <h1 className="text-black text-2xl font-DannaBold mt-4 mb-4">{t("welcome")} </h1>
      <p className="text-gray-400 text-sm font-DannaDemiBold">{t("registerHeaderDesc")}</p>
    </div>
  )
}

export { WelcomeRegister }
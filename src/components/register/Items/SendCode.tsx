import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from 'react'
import styleLogin from "../../../Style/list.module.css";
import { NavLink } from "react-router-dom";
import { useGlobalState } from "../../../State/State";
import { useTranslation } from 'react-i18next';

const SendCode = () => {
  const { t } = useTranslation();

  return (

    <div className="flex h-11 max-w-96 overflow-hidden mt-8">
      <button className="h-full w-full text-white bg-blue-600 mt-12 text-lg leading-4 font-lg font-DannaBold uppercase tracking-wider cursor-pointer rounded-full overflow-hidden" type="submit">{t("sendCodeRegister")}</button>
    </div>

  )
}

export { SendCode }
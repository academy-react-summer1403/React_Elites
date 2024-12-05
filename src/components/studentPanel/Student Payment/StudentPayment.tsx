import React, { useEffect, useState } from 'react'
import {  Formik  } from "formik";
import style from "./../../../Style/studentPanel.module.css";
import { Payment } from '../../Payment First Page/Payment Holder/Payment';
import { useGlobalState } from "../../../State/State";
import { identifier } from '../../../core/services/Functions/ThemeIdentifier';
const StudentPayment = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <Formik>
      {(form) => (
        <div className={style.page} data-theme={identifier("darkSmall")}>
          <Payment/>
        </div>
      )}
    </Formik>
  )
}

export {StudentPayment}
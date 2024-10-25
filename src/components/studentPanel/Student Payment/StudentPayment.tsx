import React from 'react'
import {  Formik  } from "formik";
import style from "./../../../Style/studentPanel.module.css";
import {StudentGhabRight} from "../studentPart/studentRight";
import {StudentGhabLeft} from "../studentPart/studentLeft";
import { Payment } from '../../Payment First Page/Payment Holder/Payment';
import { useGlobalState } from "../../../State/State";

const StudentPayment = () => {
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');

  return (
    <Formik>
      {(form) => (
        <div className={style.page} data-theme={darkMode ? "darkSmall" : "lightMode"}>
          <Payment />
        </div>
      )}
    </Formik>
  )
}

export {StudentPayment}
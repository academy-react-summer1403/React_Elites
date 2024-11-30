import React from 'react'
import style from './Items.module.css'
import { useGlobalState } from '../../../../../State/State';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { PaymentButton } from './payButtonHolder';

const PayButton = ({ id }) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();
  return (

    <NavLink to={"/Payment-Gateway/" +id} className={style.PaymentHolder}>
      <div className={style.PaymentButton} data-theme={darkMode ? "darkNoBG" : "lightMode"} ></div>
      <h1 className={style.PaymentTitle}>پرداخت</h1>
    </NavLink>
  )

}

export { PayButton }
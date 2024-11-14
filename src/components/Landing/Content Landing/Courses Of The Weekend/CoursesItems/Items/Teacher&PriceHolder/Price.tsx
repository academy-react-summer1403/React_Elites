import React from 'react'
import style from './style.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { useTranslation } from 'react-i18next';

const Price = ({price}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const {t} = useTranslation();
  return (
    <div className={style.holderP}>
      <div className={style.tooman} data-theme={darkMode ? "darkNoBG" : "lightMode"}>{t("toman")}  </div>
      <div className={style.price} data-theme={darkMode ? "dark" : "lightMode"}> {price}</div>
    </div>
  )
}

export {Price}
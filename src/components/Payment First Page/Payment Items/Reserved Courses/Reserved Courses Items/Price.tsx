import React from 'react'
import style from './Items.module.css'
import { useGlobalState } from '../../../../../State/State';
import { useTranslation } from 'react-i18next';

const Price = ({ cost }) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();
  return (
    <div className={style.priceHolder}>
      <div className={style.price} data-theme={darkMode ? "darkNoBG" : "lightMode"}> {cost} </div>
      <div className={style.price} data-theme={darkMode ? "darkNoBG" : "lightMode"}> {t("toman")}</div>
    </div>
  )
}

export { Price }
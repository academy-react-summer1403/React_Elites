import React from 'react'
import style from './Items.module.css'
import { useGlobalState } from '../../../../../State/State';
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
const Price = ({ cost }) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();
  return (
    <div className={style.priceHolder}>
      <div className={style.price} data-theme={identifier("darkNoBG")}> {cost} </div>
      <div className={style.price} data-theme={identifier("darkNoBG")}> {t("toman")}</div>
    </div>
  )
}

export { Price }
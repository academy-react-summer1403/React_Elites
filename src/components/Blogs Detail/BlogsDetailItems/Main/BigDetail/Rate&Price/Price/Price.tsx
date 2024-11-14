import React from 'react'
import style from './Price.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { useTranslation } from 'react-i18next';

const Price = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const {t} = useTranslation();
  return (
    <div className={style.price}>

        <div className={style.toman} data-theme={darkMode ? "dark" : "lightMode"}>{t("toman")}</div>ی
        <div className={style.number} data-theme={darkMode ? "dark" : "lightMode"}>2،500،000</div>

    </div>
  )
}

export {Price}
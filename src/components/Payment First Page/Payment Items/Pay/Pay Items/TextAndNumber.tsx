import React from 'react'
import style from './Items.module.css'
import { useGlobalState } from '../../../../../State/State';
import { useTranslation } from 'react-i18next';

const TextAndNumber = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const {t} = useTranslation();
  return (
    <div>
        <div className={style.allPrice} data-theme={darkMode ? "darkNoBG" : "lightMode"}>600,145,000 {t("toman")}</div>
    </div>
  )
}

export {TextAndNumber}
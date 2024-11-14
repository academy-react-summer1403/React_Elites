import React from 'react'
import style from './Decription.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { useTranslation } from 'react-i18next';

const Description = () => {
  const {t} = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.description} data-theme={darkMode ? "dark" : "lightMode"}>{t("readyForMarketLandingDesc3")}</div>
  )
}

export {Description}
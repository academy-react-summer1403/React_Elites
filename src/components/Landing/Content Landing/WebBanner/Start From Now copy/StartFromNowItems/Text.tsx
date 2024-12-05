import React from 'react'
import style from './Text.module.css'
import { useGlobalState } from '../../../../../../State/State';
import { useTranslation } from 'react-i18next';

const Text = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const {t} = useTranslation();
  return (
    <div className={style.text}  data-theme={darkMode ? "dark" : "lightMode"}>{t("StartNowBanner1")} <br /> {t("StartNowBanner2")} </div>
  )
}

export {Text}
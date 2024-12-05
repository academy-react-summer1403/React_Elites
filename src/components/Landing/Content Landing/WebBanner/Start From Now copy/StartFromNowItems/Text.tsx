import React from 'react'
import style from './Text.module.css'
import { useGlobalState } from '../../../../../../State/State';
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';
const Text = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const {t} = useTranslation();
  return (
    <div className={style.text}  data-theme={identifier("dark")}>{t("StartNowBanner1")} <br /> {t("StartNowBanner2")} </div>
  )
}

export {Text}
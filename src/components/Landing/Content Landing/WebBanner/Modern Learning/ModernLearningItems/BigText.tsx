import React from 'react'
import style from './BigText.module.css'
import { useGlobalState } from '../../../../../../State/State';
import { useTranslation } from 'react-i18next';

const BigText = () => {
  const {t} = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.bigText} data-theme={darkMode ? "dark" : "lightMode"}>{t("TeachLandingBannerBig1")} <br /> {t("TeachLandingBannerBig2")}</div>
  )
}

export {BigText}
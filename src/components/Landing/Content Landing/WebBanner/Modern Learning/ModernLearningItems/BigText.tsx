import React from 'react'
import style from './BigText.module.css'
import { useGlobalState } from '../../../../../../State/State';
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';
const BigText = () => {
  const {t} = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.bigText} data-theme={identifier("dark")}>{t("TeachLandingBannerBig1")} <br /> {t("TeachLandingBannerBig2")}</div>
  )
}

export {BigText}
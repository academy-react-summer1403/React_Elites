import React from 'react'
import style from './SmallText.module.css'
import { useGlobalState } from '../../../../../../State/State';
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';
const SmallText = () => {
  const {t} = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.smallText}  data-theme={identifier("dark")}>{t("TeachLandingBannerSmall")}</div>
  )
}

export {SmallText}
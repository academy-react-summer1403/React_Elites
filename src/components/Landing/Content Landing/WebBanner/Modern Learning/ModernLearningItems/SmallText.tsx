import React from 'react'
import style from './SmallText.module.css'
import { useGlobalState } from '../../../../../../State/State';
import { useTranslation } from 'react-i18next';

const SmallText = () => {
  const {t} = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.smallText}  data-theme={darkMode ? "dark" : "lightMode"}>{t("TeachLandingBannerSmall")}</div>
  )
}

export {SmallText}
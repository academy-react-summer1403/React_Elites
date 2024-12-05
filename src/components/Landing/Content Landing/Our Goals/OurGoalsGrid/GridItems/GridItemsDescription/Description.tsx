import React from 'react'
import style from './Decription.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Description = (props) => {
  const {t} = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.description}  data-theme={identifier("dark")}>{t("readyForMarketLandingDesc")}</div>
  )
}

export {Description}
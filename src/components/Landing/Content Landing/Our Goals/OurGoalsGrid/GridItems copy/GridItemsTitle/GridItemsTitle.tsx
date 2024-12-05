import React from 'react'
import style from './GridItemsTitle.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const GridItemsTitle = () => {
  const {t} = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.title}  data-theme={identifier("dark")}>{t("readyForMarketLanding2")}</div>
  )
}

export {GridItemsTitle}
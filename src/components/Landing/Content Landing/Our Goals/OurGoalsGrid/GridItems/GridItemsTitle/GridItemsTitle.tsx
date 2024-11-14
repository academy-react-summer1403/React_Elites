import React from 'react'
import style from './GridItemsTitle.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { useTranslation } from 'react-i18next';

const GridItemsTitle = () => {
  const {t} = useTranslation();
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  return (
    <div className={style.title}  data-theme={darkMode ? "dark" : "lightMode"}>{t("readyForMarketLanding")}</div>
  )
}

export {GridItemsTitle}
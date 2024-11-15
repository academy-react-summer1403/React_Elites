import React, { useState } from 'react'
import style from './Top.module.css'
import { useGlobalState } from '../../../../../../../State/State';
import { useTranslation } from 'react-i18next';

const TopItems = ({setSortModal}) => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();
  return (
    <>
      <div className={style.holder}>
        <div className={style.title}>{t("order")}</div>
        <div className={style.closeBtn} onClick={() => {
          setSortModal(false)
        }}> {t("close")} </div>
      </div>
      <div className={style.categories}  data-theme={darkMode ? "darkSmall" : "lightMode"}>{t("newest")}</div>
      <div className={style.categories}  data-theme={darkMode ? "darkSmall" : "lightMode"}>{t("popular")}</div>
      <div className={style.categories}  data-theme={darkMode ? "darkSmall" : "lightMode"}> {t("mostExpensive")}</div>
      <div className={style.categories}  data-theme={darkMode ? "darkSmall" : "lightMode"}>{t("cheapest")}</div>
    </>
  )
}

export {TopItems}
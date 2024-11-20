import React from 'react'
import style from './Date.module.css'
import { useGlobalState } from '../../../../../../State/State';
import { useTranslation } from "react-i18next";

const Date = () => {
  const [darkMode, setDarkMode] = useGlobalState('DarkMode');
  const { t } = useTranslation();
  return (
    <>
        <label htmlFor='date' className={style.titleDate} data-theme={darkMode ? "date" : "lightMode"}> {t("dateStart-end")} </label>
        <input name='date' type='date' className={style.date} placeholder={t("dateCourses")} data-theme={darkMode ? "dark" : "lightMode"}/>
    </>
  )
}

export {Date}